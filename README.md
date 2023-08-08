# ms-smart-tracking

Simples projeto com teste, onde temos tres microservices, envia mensagem quando uma nova venda é efetuada dando inicio a um monitoramento de tracking, o outro micro servico envia os status de tracking conforme for recebendo e um consumer que recebe essas mesagens e persiste em um banco de dados postgres.

O Projeto foi feito usando.
Node 18.0.0
Kafka
Postgres

Optei por usar javascript puro em um simples monorepo usando yarn workspaces, para executar o projeto faça os seguintes passos.:
* clonar o repositório.
* instalar os pacotes usando YARN INSTALL
* rodar o dockercompose usando DOCKER COMPOSE UP
* acessar o banco de dados usando usuario e senha padrao "postgres"
* executar o SQL que está no repositório.
* após, basta rodar o projeto usando YARN DEV com isso todos os microservicos vao dar um start automático.
