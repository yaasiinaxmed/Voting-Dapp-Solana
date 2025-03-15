import * as anchor from '@coral-xyz/anchor'
import { BankrunProvider, startAnchor } from "anchor-bankrun";
import { Program } from '@coral-xyz/anchor'
import { Keypair, PublicKey } from '@solana/web3.js'
import { Votingdapp } from '../target/types/votingdapp';

const IDL = require('../target/idl/votingdapp.json');

const votingAddress = new PublicKey("coUnmi3oBUtwtd9fjeAvSsJssXh5A5xyPbhpewyzRVF")

describe('Voting', () => {

  it('Initializes Poll', async () => {
    const context = await startAnchor("", [{name: "voting", programId: votingAddress}], []);
    const provider = new BankrunProvider(context);

    const VotingProgram = new Program<Votingdapp>(
      IDL,
      provider,
    );

    await VotingProgram.methods.initializePoll(
      new anchor.BN(1),
      "What is your favorite Type of colors?",
      new anchor.BN(0),
      new anchor.BN(1742017025),
    ).rpc();
  
  });
})
