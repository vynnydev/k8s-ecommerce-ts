-- DropForeignKey
ALTER TABLE "products" DROP CONSTRAINT "products_lineItemId_fkey";

-- AlterTable
ALTER TABLE "products" ALTER COLUMN "lineItemId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_lineItemId_fkey" FOREIGN KEY ("lineItemId") REFERENCES "line_items"("id") ON DELETE SET NULL ON UPDATE CASCADE;
