/*
  Warnings:

  - The primary key for the `ShippingAddress` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `account_addresses` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `accounts` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `categories` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `line_items` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `orders` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `products` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `reference` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `view_count` on the `products` table. All the data in the column will be lost.
  - The `pictures` column on the `products` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to alter the column `extras` on the `products` table. The data in that column could be lost. The data in that column will be cast from `Json` to `VarChar(200)`.
  - The primary key for the `products_tags` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `sessions` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `tags` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `users` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "ShippingAddress" DROP CONSTRAINT "ShippingAddress_account_id_fkey";

-- DropForeignKey
ALTER TABLE "account_addresses" DROP CONSTRAINT "account_addresses_accountId_fkey";

-- DropForeignKey
ALTER TABLE "account_addresses" DROP CONSTRAINT "account_addresses_shipping_address_id_fkey";

-- DropForeignKey
ALTER TABLE "accounts" DROP CONSTRAINT "accounts_userId_fkey";

-- DropForeignKey
ALTER TABLE "line_items" DROP CONSTRAINT "line_items_order_id_fkey";

-- DropForeignKey
ALTER TABLE "products" DROP CONSTRAINT "products_category_id_fkey";

-- DropForeignKey
ALTER TABLE "products" DROP CONSTRAINT "products_line_item_id_fkey";

-- DropForeignKey
ALTER TABLE "products_tags" DROP CONSTRAINT "products_tags_product_id_fkey";

-- DropForeignKey
ALTER TABLE "products_tags" DROP CONSTRAINT "products_tags_tag_id_fkey";

-- DropForeignKey
ALTER TABLE "sessions" DROP CONSTRAINT "sessions_userId_fkey";

-- DropIndex
DROP INDEX "products_reference_key";

-- AlterTable
ALTER TABLE "ShippingAddress" DROP CONSTRAINT "ShippingAddress_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "account_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "ShippingAddress_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "ShippingAddress_id_seq";

-- AlterTable
ALTER TABLE "account_addresses" DROP CONSTRAINT "account_addresses_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "accountId" SET DATA TYPE TEXT,
ALTER COLUMN "shipping_address_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "account_addresses_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "account_addresses_id_seq";

-- AlterTable
ALTER TABLE "accounts" DROP CONSTRAINT "accounts_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "userId" SET DATA TYPE TEXT,
ADD CONSTRAINT "accounts_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "accounts_id_seq";

-- AlterTable
ALTER TABLE "categories" DROP CONSTRAINT "categories_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "categories_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "categories_id_seq";

-- AlterTable
ALTER TABLE "line_items" DROP CONSTRAINT "line_items_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "order_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "line_items_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "line_items_id_seq";

-- AlterTable
ALTER TABLE "orders" DROP CONSTRAINT "orders_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "orders_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "orders_id_seq";

-- AlterTable
ALTER TABLE "products" DROP CONSTRAINT "products_pkey",
DROP COLUMN "reference",
DROP COLUMN "view_count",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
DROP COLUMN "pictures",
ADD COLUMN     "pictures" TEXT[],
ALTER COLUMN "extras" SET DATA TYPE VARCHAR(200),
ALTER COLUMN "category_id" SET DATA TYPE TEXT,
ALTER COLUMN "line_item_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "products_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "products_id_seq";

-- AlterTable
ALTER TABLE "products_tags" DROP CONSTRAINT "products_tags_pkey",
ALTER COLUMN "product_id" SET DATA TYPE TEXT,
ALTER COLUMN "tag_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "products_tags_pkey" PRIMARY KEY ("product_id", "tag_id");

-- AlterTable
ALTER TABLE "sessions" DROP CONSTRAINT "sessions_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "userId" SET DATA TYPE TEXT,
ADD CONSTRAINT "sessions_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "sessions_id_seq";

-- AlterTable
ALTER TABLE "tags" DROP CONSTRAINT "tags_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "tags_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "tags_id_seq";

-- AlterTable
ALTER TABLE "users" DROP CONSTRAINT "users_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "users_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "users_id_seq";

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_line_item_id_fkey" FOREIGN KEY ("line_item_id") REFERENCES "line_items"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products_tags" ADD CONSTRAINT "products_tags_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products_tags" ADD CONSTRAINT "products_tags_tag_id_fkey" FOREIGN KEY ("tag_id") REFERENCES "tags"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "account_addresses" ADD CONSTRAINT "account_addresses_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "accounts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "account_addresses" ADD CONSTRAINT "account_addresses_shipping_address_id_fkey" FOREIGN KEY ("shipping_address_id") REFERENCES "ShippingAddress"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShippingAddress" ADD CONSTRAINT "ShippingAddress_account_id_fkey" FOREIGN KEY ("account_id") REFERENCES "accounts"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "line_items" ADD CONSTRAINT "line_items_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "orders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "accounts" ADD CONSTRAINT "accounts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sessions" ADD CONSTRAINT "sessions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
