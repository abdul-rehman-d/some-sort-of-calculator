import { sql } from 'drizzle-orm';
import { index, integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const clientsTable = sqliteTable(
  'clients',
  {
    id: integer('id').primaryKey(),
    userId: integer('user_id').notNull(),
    name: text('name').notNull(),
    email: text('email').unique().notNull(),
    createdAt: text('created_at').default(sql`(CURRENT_TIMESTAMP)`).notNull(),
    updatedAt: integer('updated_at', { mode: 'timestamp' }).$onUpdate(() => new Date()),
    hourlyRate: integer('hourly_rate').notNull(),
    startingDate: integer('starting_date', { mode: 'timestamp' }).notNull(),
    active: integer('active').notNull(),
  },
  (table) => ({
    userIdIdx: index('user_id_idx').on(table.userId),
  }),
);

export type InsertClient = typeof clientsTable.$inferInsert;
export type SelectClient = typeof clientsTable.$inferSelect;
