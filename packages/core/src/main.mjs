import { KafkaClient, Sleep as sleep } from "@smart-tracking/utils";

const kafka = new KafkaClient("ms-ticket-producer");
const producer = kafka.producer();

(async () => {
  await producer.connect();
  await sleep(5000);
  await producer.send({
    topic: "tracking",
    messages: [{ value: "TRACK123", key: "ORDER_BINDED_SERVICE" }],
  });
  await sleep(5000);
  await producer.send({
    topic: "tracking",
    messages: [{ value: "TRACK123", key: "ORDER_BINDED_SERVICE" }],
  });
  await sleep(5000);
  await producer.send({
    topic: "tracking",
    messages: [{ value: "TRACK123", key: "ORDER_BINDED_CONTENT_STATEMENT" }],
  });
  await sleep(5000);
  await producer.send({
    topic: "tracking",
    messages: [{ value: "TRACK123", key: "ORDER_COLLECTED_BY_DRIVER" }],
  });
  await sleep(5000);
  await producer.send({
    topic: "tracking",
    messages: [{ value: "TRACK123", key: "ORDER_IN_TRANSIT_TO_HUB" }],
  });
  await sleep(5000);
  await producer.send({
    topic: "tracking",
    messages: [{ value: "TRACK123", key: "ORDER_RECEIVED_TO_HUB" }],
  });
  await sleep(5000);
  await producer.send({
    topic: "tracking",
    messages: [{ value: "TRACK123", key: "ORDER_COLLECTED_BY_TRANSPORTER" }],
  });
})();

process.on("SIGINT", async () => {
  await producer.disconnect();
  process.exit(0);
});
