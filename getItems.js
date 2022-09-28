import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const { ApifyClient } = require('apify-client');
//require('dotenv').config({ path: `${__dirname}/../../.env` });

const client = new ApifyClient({
  token: 'UVXFSPehNgzoyQErccJsQSYLI58DHR22GhDM',
});

const input = {};

const getItems = async () => {
  // Run the actor and wait for it to finish
  const run = await client.actor('hynekhruska/indeed-scraper').call({
    company: "Roblox",
    location: "US"
  });
  // Fetch and print actor results from the run's dataset (if any)
  console.log('Results from dataset');
  const { items } = await client.dataset(run.defaultDatasetId).listItems();
  //   console.log(items);
  items.forEach((item) => {
    console.dir(item);
  });

  return items;
};

getItems();

export default getItems();