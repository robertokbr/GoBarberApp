import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import AccountType from './AccountType';
import UserAccount from './UserAccount';

@Entity('user_provider_accounts')
class UserProviderAccount {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  account_type_id: number;

  @Column()
  user_account_id: number;

  @ManyToOne(() => AccountType)
  @JoinColumn({ name: 'account_type_id' })
  accountType: AccountType;

  @OneToOne(() => UserAccount, userAccount => userAccount.userProviderAccount, {
    cascade: true,
    eager: true,
  })
  @JoinColumn({ name: 'user_account_id' })
  userAccount: UserAccount;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default UserProviderAccount;
