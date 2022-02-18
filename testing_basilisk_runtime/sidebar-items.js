initSidebarItems({"constant":[["AVERAGE_ON_INITIALIZE_RATIO","We assume that an on-initialize consumes 2.5% of the weight on average, hence a single extrinsic will not be allowed to consume more than `AvailableBlockRatio - 2.5%`."],["CENTS",""],["CORE_ASSET_ID","Core asset id"],["DAYS",""],["DOLLARS",""],["EPOCH_DURATION_IN_BLOCKS",""],["FORTUNE",""],["HOURS",""],["MAXIMUM_BLOCK_WEIGHT","We allow for"],["MAX_IN_RATIO","Max fraction of pool to sell in single transaction"],["MAX_OUT_RATIO","Max fraction of pool to buy in single transaction"],["MILLICENTS",""],["MILLISECS_PER_BLOCK","Since BABE is probabilistic this is the average expected block time that we are targeting. Blocks will be produced at a minimum duration defined by `SLOT_DURATION`, but some slots will not be allocated to any authority and hence no block will be produced. We expect to have this block time on average following the defined slot duration and the value of `c` configured for BABE (where `1 - c` represents the probability of a slot being empty). This value is only used indirectly to define the unit constants below that are expressed in blocks. The rest of the code should use `SLOT_DURATION` instead (like the Timestamp pallet for calculating the minimum period)."],["MINUTES",""],["MIN_POOL_LIQUIDITY","Minimum pool liquidity"],["MIN_TRADING_LIMIT","Trading limit"],["NATIVE_EXISTENTIAL_DEPOSIT",""],["NORMAL_DISPATCH_RATIO","We allow `Normal` extrinsics to fill up the block up to 75%, the rest can be used by  Operational  extrinsics."],["RUNTIME_API_VERSIONS",""],["SECS_PER_BLOCK",""],["SLOT_DURATION",""],["UNITS",""],["VERSION",""],["WASM_BINARY",""],["WASM_BINARY_BLOATY",""],["WEIGHT_PER_SECOND",""]],"enum":[["Call",""],["Event",""],["OriginCaller",""],["ProxyType","The type used to represent the kinds of proxying allowed."]],"fn":[["deposit",""],["native_version","The version information used to identify this runtime when compiled natively."]],"mod":[["adapter",""],["api",""],["locked_balance",""],["opaque","Opaque types. These are used by the CLI to instantiate machinery that don’t need to know the specifics of the runtime. They can then be made to be agnostic over specific formats of data like extrinsics, allowing for them to continue syncing the network through upgrades to even the core data structures."],["testing",""],["weights",""],["xcm",""]],"struct":[["AdjustmentVariable","The adjustment variable of the runtime. Higher values will cause `TargetBlockFullness` to change the fees more rapidly."],["AnnouncementDepositBase",""],["AnnouncementDepositFactor",""],["AssetLocation","Basilisk Pallets configurations"],["AssetPairAccountId",""],["AttributeDepositBase",""],["BasiliskExtrinsicBaseWeight","Basilisk base weight of an extrinsic This includes weight for payment in non-native currency."],["BlockHashCount",""],["BlockLength","Maximum length of block. Up to 5MB."],["BlockWeights","Block weights base values and limits."],["Burn",""],["CandidacyBond",""],["CheckInherents",""],["ClassDeposit",""],["CooloffPeriod",""],["CouncilMaxMembers",""],["CouncilMaxProposals",""],["CouncilMotionDuration",""],["DataDepositPerByte",""],["DepositPerByte",""],["DesiredMembers",""],["DesiredRunnersUp",""],["DustingReward",""],["ElectionsPhragmenPalletId",""],["EnactmentPeriod",""],["EnsureRootOrTreasury",""],["ExchangeFee",""],["ExtrinsicBaseWeight",""],["FastTrackVotingPeriod",""],["GenesisConfig",""],["InstanceDeposit",""],["InstantAllowed",""],["KeyLimit",""],["LBPExchangeFee",""],["LaunchPeriod",""],["MaxApprovals",""],["MaxAuthorities",""],["MaxCandidates",""],["MaxInRatio",""],["MaxInvulnerables",""],["MaxLocks",""],["MaxOutRatio",""],["MaxPending",""],["MaxProposals",""],["MaxProxies",""],["MaxReserves",""],["MaxScheduledPerBlock",""],["MaxVestingSchedules",""],["MaxVotes",""],["MaximumReasonLength",""],["MaximumSchedulerWeight",""],["MinCandidates",""],["MinPoolLiquidity",""],["MinTradingLimit",""],["MinVestedTransfer",""],["MinimumDeposit",""],["MinimumMultiplier","Minimum amount of the multiplier. This value cannot be too low. A test case should ensure that combined with `AdjustmentVariable`, we can recover from the minimum."],["MinimumPeriod",""],["MultiPaymentCurrencySetFee",""],["NativeAssetId",""],["NativeExistentialDeposit",""],["NoPreimagePostponement",""],["Offset",""],["Origin","The runtime origin type representing the origin of a call."],["PalletInfo","Provides an implementation of `PalletInfo` to provide information about the pallet setup in the runtime."],["Period",""],["PotId",""],["PreimageBaseDeposit",""],["PreimageByteDeposit",""],["PreimageByteDeposit",""],["PreimageMaxSize",""],["ProposalBond",""],["ProposalBondMaximum",""],["ProposalBondMinimum",""],["ProxyDepositBase",""],["ProxyDepositFactor",""],["RegistryStrLimit",""],["ReserveClassIdUpTo",""],["ReservedDmpWeight",""],["ReservedXcmpWeight",""],["Runtime",""],["RuntimeApi",""],["RuntimeApiImpl","Implements all runtime apis for the client side."],["SS58Prefix",""],["SpendPeriod",""],["TargetBlockFullness","The portion of the `NORMAL_DISPATCH_RATIO` that we adjust the fees with. Blocks filled less than this will decrease the weight and more will increase."],["TechnicalMaxMembers",""],["TechnicalMaxProposals",""],["TechnicalMotionDuration",""],["TermDuration",""],["TipCountdown",""],["TipFindersFee",""],["TipReportDepositBase",""],["TipReportDepositPerByte",""],["TransactionByteFee",""],["TreasuryPalletId",""],["UncheckedExtrinsic","Simple blob to hold an extrinsic without committing to its format and ensure it is serialized correctly."],["UncleGenerations",""],["UniquesMetadataDepositBase",""],["UniquesStringLimit",""],["ValueLimit",""],["Version",""],["VotingBondBase",""],["VotingBondFactor",""],["VotingPeriod",""],["WeightToFee",""]],"trait":[["InherentDataExt",""]],"type":[["AccountId","Some way of identifying an account on the chain. We intentionally make it equivalent to the public key of our transaction signing scheme."],["AccountIndex","The type for looking up accounts. We don’t expect more than 4 billion of them, but you never know…"],["Address","The address format for describing accounts."],["AllCouncilMembers",""],["AllPallets","All pallets included in the runtime as a nested tuple of types."],["AllPalletsReversedWithSystemFirst","All pallets included in the runtime as a nested tuple of types in reversed order. With the system pallet first."],["AllPalletsWithSystem","All pallets included in the runtime as a nested tuple of types."],["AllPalletsWithSystemReversed","All pallets included in the runtime as a nested tuple of types in reversed order."],["AllPalletsWithoutSystem","All pallets included in the runtime as a nested tuple of types. Excludes the System pallet."],["AllPalletsWithoutSystemReversed","All pallets included in the runtime as a nested tuple of types in reversed order. Excludes the System pallet."],["Amount","Signed version of Balance"],["AssetId","Type for storing the id of an asset."],["AssetRegistry",""],["AssetRegistryConfig",""],["Aura",""],["AuraConfig",""],["AuraExt",""],["AuraExtConfig",""],["AuraId","An Aura authority identifier using S/R 25519 as its crypto."],["Authorship",""],["Balance","Type for storing the balance of an account."],["Balances",""],["BalancesConfig",""],["Block","Block type as expected by this runtime."],["Block","Block type."],["BlockId","BlockId type as expected by this runtime."],["BlockNumber","An index to a block."],["CheckedExtrinsic","Extrinsic type that has already been checked."],["CollatorSelection",""],["CollatorSelectionConfig",""],["Council",""],["CouncilCollective",""],["CouncilConfig",""],["CumulusXcm",""],["Currencies",""],["Democracy",""],["DmpQueue",""],["Duster",""],["DusterConfig",""],["Elections",""],["ElectionsConfig",""],["EnsureMajorityCouncilOrRoot",""],["EnsureSuperMajorityCouncilOrRoot",""],["EnsureSuperMajorityTechCommitteeOrRoot",""],["EnsureUnanimousCouncilOrRoot",""],["EnsureUnanimousTechCommitteOrRoot",""],["Exchange",""],["Executive","Executive: handles dispatch to the various modules."],["Faucet",""],["FaucetConfig",""],["Hash","A hash of some data used by the chain."],["Header","Block header type as expected by this runtime."],["Header","Header type."],["Index","Index of a transaction in the chain."],["LBP",""],["ManageOrigin",""],["MultiTransactionPayment",""],["MultiTransactionPaymentConfig",""],["Multiplier","Fee multiplier."],["NFT",""],["OrmlXcm",""],["ParachainInfo",""],["ParachainInfoConfig",""],["ParachainSystem",""],["PolkadotXcm",""],["PolkadotXcmConfig",""],["Preimage",""],["PriceOracle",""],["Proxy",""],["RelayChainInfo",""],["Scheduler",""],["Session",""],["SessionConfig",""],["Signature","Alias to 512-bit hash when used in the context of a transaction signature on the chain."],["SignedBlock","A Block signed with a Justification"],["SignedExtra","The SignedExtension to the basic transaction logic."],["SlowAdjustingFeeUpdate","Parameterized slow adjusting fee updated based on https://w3f-research.readthedocs.io/en/latest/polkadot/overview/2-token-economics.html?highlight=token%20economics#-2.-slow-adjusting-mechanism"],["Sudo",""],["SudoConfig",""],["System",""],["SystemConfig",""],["TechnicalCollective",""],["TechnicalCommittee",""],["TechnicalCommitteeConfig",""],["Timestamp",""],["Tips",""],["Tokens",""],["TokensConfig",""],["TransactionPayment",""],["Treasury",""],["TreasuryConfig",""],["UncheckedExtrinsic","Unchecked extrinsic type as expected by this runtime."],["Uniques",""],["UnknownTokens",""],["Utility",""],["Vesting",""],["VestingConfig",""],["Weight","Numeric range of a transaction weight."],["XTokens",""],["XYK",""],["XcmpQueue",""]]});