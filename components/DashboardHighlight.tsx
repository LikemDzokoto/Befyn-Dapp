import { AppContext } from "@/context/AppContext";
import { getUserBalance } from "@/utils/interactions";
import { ethers } from "ethers";
import moment from "moment";
import React, { useContext, useEffect, useState } from "react";

function DashboardHighlight({ donations }: { donations: any[] }) {
  const { account } = useContext(AppContext);

  const [balance, setBalance] = useState("0.0");
  useEffect(() => {
    const handleBalance = async () => {
      const amount = await getUserBalance();
      if (amount) {
        const balanceInEth = ethers.utils.formatEther(amount);
        const balanceInNumber = parseFloat(balanceInEth);
        const balanceRounded = balanceInNumber.toFixed(4);
        setBalance(balanceRounded.toString());
      }
    };

    handleBalance();
  });

  const getTotalUserDonations = () => {
    let sum = ethers.BigNumber.from(0);
    let userDonations = donations.filter((tx: any) => {
      return tx.from === account;
    });
    userDonations = userDonations.map((donation) => {
      return ethers.BigNumber.from(donation.value);
    });
    userDonations.forEach((value) => {
      sum = sum.add(value);
    });
    return ethers.utils.formatEther(sum);
  };

  const getTodayUserDonations = () => {
    const today = moment().startOf("day");
    console.log(today);
    let sum = ethers.BigNumber.from(0);
    let userDonations = donations.filter((tx: any) => {
      return tx.from === account;
    });
    userDonations.forEach((donation) => {
      const donationTimestamp = moment.unix(donation.timeStamp);
      if (today.isSame(donationTimestamp, "day")) {
        sum = sum.add(ethers.BigNumber.from(donation.value));
      }
    });
    return ethers.utils.formatEther(sum);
  };

  const getTotalUserDonation = () => {
    let count = 0;
    let userDonations = donations.filter((tx: any) => {
      return tx.from === account;
    });
    userDonations.forEach((donation) => {
      count += 1;
    });
    return count;
  };

 
  return (
    <div className="grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <div className="bg-white border border-gray-200 rounded-xl">
        <div className="px-5 py-4">
          <p className="text-xs font-medium tracking-wider text-gray-500 uppercase">
            Wallet Ballance
          </p>
          <div className="flex items-center justify-between mt-3">
            <p className="text-xl font-bold text-gray-800">{balance} ETH</p>

          
          </div>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl">
        <div className="px-5 py-4">
          <p className="text-xs font-medium tracking-wider text-gray-500 uppercase">
            Recent  Premium Deposits 
            </p>

          <div className="flex items-center justify-between mt-3">
            <p className="text-xl font-bold text-gray-800">
              {getTodayUserDonations()} ETH
            </p>

         
          </div>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl">
        <div className="px-5 py-4">
          <p className="text-xs font-medium tracking-wider text-gray-500 uppercase">
            Total Deposits
          </p>
          <div className="flex items-center justify-between mt-3">
            <p className="text-xl font-bold text-gray-800">
              {getTotalUserDonations()} ETH
            </p>

          </div>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl">
        <div className="px-5 py-4">
          <p className="text-xs font-medium tracking-wider text-gray-500 uppercase">
            Clam Score
          </p>
          <div className="flex items-center justify-between mt-3">
            <p className="text-xl font-bold text-gray-800">
              {/* {getTotalUserDonation()} */}
              100%
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardHighlight;
