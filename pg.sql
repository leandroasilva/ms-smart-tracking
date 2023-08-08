CREATE DATABASE IF NOT EXISTS "smart_tracking";

CREATE TABLE "tracking" ( 
  "id" UUID NULL,
  "tracking_code" VARCHAR(250) NOT NULL,
  "event" VARCHAR(250) NOT NULL,
   PRIMARY KEY ("id")
);