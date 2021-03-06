# Migration `20200605150215-migr1`

This migration has been generated by endorphin82 at 6/5/2020, 3:02:15 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE `restockchicago`.`Category` (
`description` varchar(191)   ,`icon` varchar(191) NOT NULL  ,`id` int NOT NULL  AUTO_INCREMENT,`name` varchar(191) NOT NULL  ,`parent` int   ,`url` varchar(191) NOT NULL  ,
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci

CREATE TABLE `restockchicago`.`Product` (
`category_id` int  ,`description` varchar(191)   ,`icon` varchar(191) NOT NULL  ,`id` int NOT NULL  AUTO_INCREMENT,`name` varchar(191) NOT NULL  ,`url` varchar(191) NOT NULL  ,
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci

CREATE TABLE `restockchicago`.`ImageCat` (
`category_id` int  ,`id` int NOT NULL  AUTO_INCREMENT,`url` varchar(191) NOT NULL  ,
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci

CREATE TABLE `restockchicago`.`ImageProd` (
`id` int NOT NULL  AUTO_INCREMENT,`product_id` int  ,`url` varchar(191) NOT NULL  ,
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci

CREATE UNIQUE INDEX `Category.name` ON `restockchicago`.`Category`(`name`)

CREATE UNIQUE INDEX `Category.url` ON `restockchicago`.`Category`(`url`)

CREATE UNIQUE INDEX `Category.icon` ON `restockchicago`.`Category`(`icon`)

CREATE UNIQUE INDEX `Product.name` ON `restockchicago`.`Product`(`name`)

CREATE UNIQUE INDEX `Product.url` ON `restockchicago`.`Product`(`url`)

CREATE UNIQUE INDEX `Product.icon` ON `restockchicago`.`Product`(`icon`)

CREATE  INDEX `Product_Category_id_fk` ON `restockchicago`.`Product`(`category_id`)

CREATE  INDEX `Image_Category_id_fk` ON `restockchicago`.`ImageCat`(`category_id`)

CREATE  INDEX `Image_Product_id_fk` ON `restockchicago`.`ImageProd`(`product_id`)

ALTER TABLE `restockchicago`.`Product` ADD FOREIGN KEY (`category_id`) REFERENCES `restockchicago`.`Category`(`id`) ON DELETE SET NULL ON UPDATE CASCADE

ALTER TABLE `restockchicago`.`ImageCat` ADD FOREIGN KEY (`category_id`) REFERENCES `restockchicago`.`Category`(`id`) ON DELETE SET NULL ON UPDATE CASCADE

ALTER TABLE `restockchicago`.`ImageProd` ADD FOREIGN KEY (`product_id`) REFERENCES `restockchicago`.`Product`(`id`) ON DELETE SET NULL ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200605150215-migr1
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,53 @@
+// This is your Prisma schema file,
+// learn more about it in the docs: https://pris.ly/d/prisma-schema
+
+datasource db {
+  provider = "mysql"
+  url      = env("DATABASE_URL")
+}
+
+generator client {
+  provider = "prisma-client-js"
+}
+
+model Category {
+  id           Int        @default(autoincrement())  @id
+  name         String     @unique
+  url          String     @unique
+  description  String?
+  parent       Int?
+  products     Product[]
+  images       ImageCat[]
+  icon         String     @unique
+}
+
+model Product {
+  id           Int         @default(autoincrement())  @id
+  name         String      @unique
+  url          String      @unique
+  description  String?
+  category_id  Int?
+  category     Category?   @relation(fields: [category_id], references: [id])
+  images       ImageProd[]
+  icon         String      @unique
+
+  @@index([category_id], name: "Product_Category_id_fk")
+}
+
+model ImageCat {
+  id           Int       @default(autoincrement())  @id
+  url          String
+  category_id  Int?
+  category     Category? @relation(fields: [category_id], references: [id])
+
+  @@index([category_id], name: "Image_Category_id_fk")
+}
+
+model ImageProd {
+   id           Int       @default(autoincrement())  @id
+   url          String
+   product_id   Int?
+   product      Product?  @relation(fields: [product_id], references: [id])
+
+   @@index([product_id], name: "Image_Product_id_fk")
+}
```


