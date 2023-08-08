import { KafkaClient } from "@smart-tracking/utils";

const kafka = new KafkaClient("ms-order-consumer");

(async () => {
    const consumer = kafka.consumer("default");
    await consumer.connect();
    await consumer.subscribe({ topic: "tracking", fromBeginning: true });
    await consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        console.log({
          value: message.value.toString(),
        });
      },
    });
})();