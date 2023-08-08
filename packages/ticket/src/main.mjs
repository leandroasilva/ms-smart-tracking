import { KafkaClient } from "@smart-tracking/utils";

const kafka = new KafkaClient("ms-ticket-producer");
const producer = kafka.producer();

(async () => {
    await producer.connect();

    await producer.send({
      topic: "tracking",
      messages: [{ value: "TRACK123", key: "ORDER_READ_TO_SEND_WITH_TICKETS" }],
    });
})();

process.on("SIGINT", async () => {
  await producer.disconnect();
  process.exit(0);
});
