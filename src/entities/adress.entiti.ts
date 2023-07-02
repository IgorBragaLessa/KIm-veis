import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("adresses")
class Address {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 50 })
  district: string;

  @Column({ length: 8 })
  zipCode: string;

  @Column({ length: 5 })
  number: string;

  @Column({ length: 50 })
  city: string;

  @Column({ length: 2 })
  state: string;
}

export { Address };
