
-- Database: "complete-typescript-course"


-- DROP TABLE "Courses";

CREATE TABLE "Courses"
(
  id serial NOT NULL,
  url character varying(255),
  description character varying(255) NOT NULL,
  "longDescription" text NOT NULL,
  "seqNo" integer NOT NULL,
  "iconUrl" character varying(255) NOT NULL,
  "comingSoon" boolean NOT NULL DEFAULT false,
  "isNew" boolean NOT NULL DEFAULT false,
  "isOngoing" boolean NOT NULL DEFAULT false,
  "visibleFrom" timestamp with time zone NOT NULL DEFAULT '1970-02-01 00:00:00+01'::timestamp with time zone,
  "createdAt" timestamp with time zone NOT NULL,
  "updatedAt" timestamp with time zone NOT NULL,
  "courseListIcon" character varying(255),
  CONSTRAINT "Courses_pkey" PRIMARY KEY (id)
);


-- Table: "Lessons"

CREATE TABLE "Lessons"
(
  id serial NOT NULL,
  url character varying(255),
  description character varying(255) NOT NULL,
  duration character varying(255) NOT NULL,
  "seqNo" integer NOT NULL,
  "courseId" integer,
  pro boolean DEFAULT false,
  "videoId" character varying(255),
  "gitHubUrl" character varying(255) NOT NULL,
  "downloadUrl" character varying(255) NOT NULL,
  tags character varying(255) DEFAULT ''::character varying,
  "createdAt" timestamp with time zone NOT NULL,
  "updatedAt" timestamp with time zone NOT NULL,
  vimeoid character varying(50),
  CONSTRAINT "Lessons_pkey" PRIMARY KEY (id),
  CONSTRAINT "Lessons_courseId_fkey" FOREIGN KEY ("courseId")
      REFERENCES "Courses" (id) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION
);

-- Index: "sortByUrl"

-- DROP INDEX "sortByUrl";

CREATE UNIQUE INDEX "sortByUrl"
  ON "Lessons"
  USING btree
  (url COLLATE pg_catalog."default");


