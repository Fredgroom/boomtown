CREATE DATABASE boomtown;

CREATE USER boomtown WITH PASSWORD 'boomtown';

-- then exited, and re-ran psql:
-- psql -U boomtown -d boomtown
-- DROP TABLE "public"."items";

CREATE TABLE "public"."tags" (
    "id" serial PRIMARY KEY,
    "title" text NOT NULL
);

CREATE TABLE "public"."users" (
    "id" serial PRIMARY KEY,
    "email" text NOT NULL,
    "fullname" text NOT NULL,
    "bio" text
);

CREATE TABLE "public"."items" (
    "id" serial primary key,
    "title" text not null,
    "imageurl" text DEFAULT null,
    "description" text not null,
    "created" timestamp with time zone DEFAULT NOW(),
    "ownerid" integer REFERENCES users(id)
        ON DELETE CASCADE,
    "borrowerid" integer REFERENCES users(id)
        ON DELETE SET NULL
);

CREATE TABLE "public"."itemtags" (
    "itemid" integer references items (id)
        on delete no action,
    "tagid" integer references tags (id)
        on delete no action,
    unique (itemid, tagid)
);