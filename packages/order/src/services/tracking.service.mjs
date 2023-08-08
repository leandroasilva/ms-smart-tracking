class TrackingService {
  constructor(poolConnection) {
    this.pool = poolConnection;
  }

  #validateTrackingCode(trackingCode) {
    if (!trackingCode) {
      throw new Error("Tracking code is required");
    }
  }

  async #validateEvent(trackingCode, event) {
    if (!event) {
      throw new Error("Event is required");
    }

    const { rows } = await this.pool.query(
      `SELECT * FROM tracking WHERE event = $1 and tracking_code = $2`,
      [event, trackingCode]
    );

    if (rows.length >= 1) {
      throw new Error("Event was already tracked");
    }
  }

  async #validateTrack(trackingCode, event) {
    this.#validateTrackingCode(trackingCode);
    await this.#validateEvent(trackingCode, event);
  }

  async track(trackingCode, event) {
    await this.validateTrack(trackingCode, event);
    return await this.pool.query(
      `INSERT INTO tracking (tracking_code, event) VALUES ($1, $2) RETURNING *`,
      [trackingCode, event]
    );
  }
}

export default TrackingService;
