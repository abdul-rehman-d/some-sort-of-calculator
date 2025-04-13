CREATE TABLE `clients` (
	`id` integer PRIMARY KEY NOT NULL,
	`user_id` integer NOT NULL,
	`name` text NOT NULL,
	`email` text NOT NULL,
	`created_at` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
	`updated_at` integer,
	`hourly_rate` integer NOT NULL,
	`starting_date` integer NOT NULL,
	`active` integer NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `clients_email_unique` ON `clients` (`email`);--> statement-breakpoint
CREATE INDEX `user_id_idx` ON `clients` (`user_id`);