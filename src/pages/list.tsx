import React from 'react';
import ListCard from '../components/ListCard'
import challengeData from './api/data/challengeData';
import Link from 'next/link';
import Header from '../components/Header';
import { GetServerSideProps } from 'next';

type ChallengeData = {
  [key: string]: {
    title: string;
    description: string;
    challenge: string;
    hint: string;
    flag: string;
  };
}

const ChallengeList: React.FC<{ data: ChallengeData }> = ({ data }) => {

  return (
    <main>
      <Header title="List of Challenges"/>
      <div className="grid grid-cols-1 gap-4 px-16 py-12" suppressHydrationWarning>
        {Object.keys(data).map((key) => {
          const { title, description } = data[key]!;
          return (
            <ListCard key={key}>
              <Link href="/[slug]" as={`/${key}`}>
                <h2 className="text-lg font-semibold">{title}</h2>
                <p>{description}</p>
              </Link>
            </ListCard>
          );
        })}
      </div>
    </main>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {

  return {
    props: {
      data: challengeData,
    },
  };
};

export default ChallengeList;