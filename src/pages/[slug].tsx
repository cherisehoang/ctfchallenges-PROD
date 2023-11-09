import Layout from '../components/Layout';
import HintButton from '../components/HintButton';
import DownloadFileButton from '../components/DownloadFileButton';
import challengeData from './api/data/challengeData';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import FlagForm from '../components/FlagForm';

const ChallengePage: React.FC = () => {
  
  const router = useRouter();
  const { slug } = router.query;
  if (!slug || typeof slug !== 'string' || !(slug in challengeData)) {
    // Handle invalid or missing slugs
    return <div>Challenge not found</div>;
  }

  const challengeD = challengeData[slug];
  if (!challengeD) {
    return (
      <Layout title="Challenge Not Found">
        <p>Sorry, the challenge was not found. Please contact me because this is an error!</p>
      </Layout>
    );
  }
  
  if (slug == "picture") {
    return (
      <Layout title={challengeD.title}>
        <p>{challengeD.description}</p>
        <DownloadFileButton downloadLink="/picture.txt"></DownloadFileButton>
        <HintButton hintText={challengeD.hint}></HintButton>
        <FlagForm correctFlag={challengeD.flag}/>
        <p>{challengeD.note}</p>
      </Layout>
    ); 
  } else if (slug == "regex") {
    return (
      <Layout title={challengeD.title}>
        <p>{challengeD.description}</p>
        <DownloadFileButton downloadLink="/regex.txt"></DownloadFileButton>
        <HintButton hintText={challengeD.hint}></HintButton>
        <FlagForm correctFlag={challengeD.flag}/>
        <p>{challengeD.note}</p>
      </Layout>
    ); 
  } else {
    return (
      <Layout title={challengeD.title}>
        <p>{challengeD.description}</p>
        <p>{challengeD.challenge}</p>
        <HintButton hintText={challengeD.hint}></HintButton>
        <FlagForm correctFlag={challengeD.flag}/>
        <p>{challengeD.note}</p>
      </Layout>
    );
  }
}
export default ChallengePage;