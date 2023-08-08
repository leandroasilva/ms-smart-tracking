import { Kafka } from 'kafkajs';

class KafkaClient {
    constructor(clientId="default", brokers = ['localhost:9092']) {
        this.kafka = new Kafka({
            clientId,
            brokers
        });
    }

    async connect() {
        await this.kafka.connect();
    }

    async disconnect() {
        await this.kafka.disconnect();
    }

    async send(topic, message) {
        await this.kafka.send({ topic, messages: [message] });
    }

    async subscribe(topic) {
        await this.kafka.subscribe({ topic });
    }

    async unsubscribe(topic) {
        await this.kafka.unsubscribe({ topic });
    }
}

export default KafkaClient;