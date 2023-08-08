import { Kafka } from 'kafkajs';

class KafkaClient {
    constructor(clientId="default", brokers = ['localhost:9092']) {
        this.kafka = new Kafka({
            clientId,
            brokers
        });
    }

    consumer(groupId="default") {
        return this.kafka.consumer({ groupId });
    }
}

export default KafkaClient;