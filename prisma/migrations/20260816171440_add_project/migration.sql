-- CreateTable
CREATE TABLE "Project" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "demo" TEXT NOT NULL,
    "repo" TEXT NOT NULL,
    "type" INTEGER NOT NULL DEFAULT 0,
    "description" TEXT NOT NULL,
    "instructions" TEXT NOT NULL,
    "banner" TEXT NOT NULL,
    "team" TEXT NOT NULL,
    "teammates" TEXT[],
    "submitted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Debug" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "agent" TEXT NOT NULL,
    "projectId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Debug_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Debug" ADD CONSTRAINT "Debug_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;
