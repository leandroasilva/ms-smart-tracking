import { KafkaClient, PgClient } from "@smart-tracking/utils";
import TrackingService from "./services/tracking.service.mjs";

const pool = new PgClient();
const kafka = new KafkaClient("ms-order-consumer");
const consumer = kafka.consumer("default");

(async () => {
  const poolConnect = await pool.connect();
  
  await consumer.connect();
  await consumer.subscribe({ topic: "tracking", fromBeginning: true });
  
  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      try {
        const trackingCode = message.value.toString();
        const event = message.key.toString();
        await new TrackingService(poolConnect).track(trackingCode, event);
      } catch (error) {
        /* handle error */
      }
    },
  });
})();

process.on("SIGINT", async () => {
  await consumer.disconnect();
  await pool.disconnect();
  process.exit(0);
})