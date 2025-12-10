import { type User, type InsertUser, type ContactSubmission, type InsertContact, users, contactSubmissions } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContact(contact: InsertContact): Promise<ContactSubmission>;
  getContacts(): Promise<ContactSubmission[]>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }

  async createContact(insertContact: InsertContact): Promise<ContactSubmission> {
    const [contact] = await db.insert(contactSubmissions).values(insertContact).returning();
    return contact;
  }

  async getContacts(): Promise<ContactSubmission[]> {
    return await db.select().from(contactSubmissions).orderBy(contactSubmissions.createdAt);
  }
}

export const storage = new DatabaseStorage();
