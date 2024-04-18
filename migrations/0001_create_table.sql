-- CreateTable
CREATE TABLE "Profile" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "picture" TEXT,
    "description" TEXT,
    "instagram" TEXT,
    "twitter" TEXT,
    "facebook" TEXT,
    "twitch" TEXT
);

-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "profileId" INTEGER NOT NULL,
    CONSTRAINT "User_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_profileId_key" ON "User"("profileId");

--"INSERT INTO  \"Profile\" (\"picture\", \"description\", \"instagram\", \"twitter\", \"facebook\", \"twitch\") VALUES ('/profile.png','My heart is saying Im not caring no more', 'https://www.instagram.com/patr.wan/', 'https://twitter.com/GenshinImpact', 'https://twitter.com/GenshinImpact', 'https://twitter.com/GenshinImpact');" --local