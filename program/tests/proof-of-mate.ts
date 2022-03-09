import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { ProofOfMate } from "../target/types/proof_of_mate";

describe("proof-of-mate", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.Provider.env());

  const program = anchor.workspace.ProofOfMate as Program<ProofOfMate>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.rpc.initialize({});
    console.log("Your transaction signature", tx);
  });
});
