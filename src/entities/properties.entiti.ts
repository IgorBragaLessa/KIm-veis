import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Address } from "./adress.entiti";
import { Categories } from "./categories.entiti";
import { Schedules_user_properties } from "./shedeuls.entiti";

@Entity("properties")
class Properties {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ default: false })
  sold: boolean;

  @Column()
  value: number;

  @Column()
  size: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToOne(() => Address)
  @JoinColumn()
  address: Address;

  @ManyToOne(() => Categories, { eager: true, nullable: true })
  category: Categories;

  @OneToMany(
    () => Schedules_user_properties,
    (schedules) => schedules.properties
  )
  schedules: Schedules_user_properties[];
}

export { Properties };
