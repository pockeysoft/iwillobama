import bcrypt from 'bcrypt'
import { IsEmail } from 'class-validator'
import {
  BaseEntity,
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'

const BCRYPT_ROUNDS = 10

@Entity()
class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: 'text', nullable: true })
  @IsEmail()
  email: string | null

  @Column({ type: 'boolean', default: false })
  verifiedEmail: boolean

  @Column({ type: 'text' })
  username: string

  @Column({ type: 'text', nullable: true })
  password: string

  @Column({ type: 'text', nullable: true })
  profilePhoto: string | null

  @CreateDateColumn()
  createdAt: string

  @UpdateDateColumn()
  updatedAt: string

  public comparePassword(password: string): Promise<boolean> {
    return bcrypt.compare(password, this.password)
  }

  @BeforeInsert()
  @BeforeUpdate()
  async savePassword(): Promise<void> {
    if (this.password) {
      const hashedPassword = await this.hashPassword(this.password)
      this.password = hashedPassword
    }
  }

  private hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, BCRYPT_ROUNDS)
  }
}

export default User
