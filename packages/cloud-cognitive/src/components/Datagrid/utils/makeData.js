/**
 * Copyright IBM Corp. 2022, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import namor from 'namor';
<<<<<<< HEAD
<<<<<<< HEAD
import { StatusIcon } from '../../StatusIcon';
=======
>>>>>>> 05ee7cdcf736a836aafbb7b74e11211b4a5787c8
=======
>>>>>>> b1256ee15584a536b87ff6bef3242a13b22a6212
import { inlineEditSelectItems } from './getInlineEditColumns';

const getRandomInteger = (min, max, decimalPlaces) => {
  const roundedMin = Math.ceil(min);
  const roundedMax = Math.floor(max);
  const randomNumber = Math.random() * (max - min) + min;
  if (!decimalPlaces) {
    return (
      Math.floor(Math.random() * (roundedMax - roundedMin + 1)) + roundedMin
    );
  }
  const power = Math.pow(10, decimalPlaces);
  return Math.floor(randomNumber * power) / power;
};

export const makeData = (...lens) => {
  const makeDataLevel = (depth = 0) => {
    const len = lens[depth];
    return range(len).map(() => ({
      ...newPerson(),
      subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
    }));
  };

  return makeDataLevel();
};

export const range = (len) => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

<<<<<<< HEAD
<<<<<<< HEAD
const renderStatusIcon = (statusChance) => {
  const iconProps = {
    size: 'sm',
    theme: 'light',
    kind:
      statusChance > 0.66
        ? 'critical'
        : statusChance > 0.33
        ? 'minor-warning'
        : 'normal',
    iconDescription:
      statusChance > 0.66
        ? 'Critical'
        : statusChance > 0.33
        ? 'Minor warning'
        : 'Normal',
  };
  return <StatusIcon {...iconProps} />;
=======
/** This function is only to create a random data point when the person joined */
const getRandomDateJoined = () => {
  return randomDate(new Date(2022, 0, 1), new Date());
};

const getPasswordStrength = () => {
  const chance = Math.random();

  return chance > 0.66
    ? 'critical'
    : chance > 0.33
    ? 'minor-warning'
    : 'normal';
>>>>>>> b1256ee15584a536b87ff6bef3242a13b22a6212
};

const renderDocLink = () => {
  const chance = Math.random();

  const docLinkObj = {
    href:
      chance > 0.66
        ? 'http://carbondesignsystem.com/'
        : chance > 0.33
        ? 'https://pages.github.ibm.com/cdai-design/pal/'
        : 'http://carbon-for-ibm-products.netlify.app/',
    text:
      chance > 0.66
        ? 'Carbon Design System'
<<<<<<< HEAD
        : statusChance > 0.33
=======
/** This function is only to create a random data point when the person joined */
const getRandomDateJoined = () => {
  return randomDate(new Date(2022, 0, 1), new Date());
};

const getPasswordStrength = () => {
  const chance = Math.random();

  return chance > 0.66
    ? 'critical'
    : chance > 0.33
    ? 'minor-warning'
    : 'normal';
};

const renderDocLink = () => {
  const chance = Math.random();

  const docLinkObj = {
    href:
      chance > 0.66
        ? 'http://carbondesignsystem.com/'
        : chance > 0.33
        ? 'https://pages.github.ibm.com/cdai-design/pal/'
        : 'http://carbon-for-ibm-products.netlify.app/',
    text:
      chance > 0.66
        ? 'Carbon Design System'
        : chance > 0.33
>>>>>>> 05ee7cdcf736a836aafbb7b74e11211b4a5787c8
=======
        : chance > 0.33
>>>>>>> b1256ee15584a536b87ff6bef3242a13b22a6212
        ? 'Carbon for IBM Products PAL'
        : 'Carbon for IBM Products storybook',
  };
  return docLinkObj;
};

const newPerson = () => {
  const statusChance = Math.random();
<<<<<<< HEAD
<<<<<<< HEAD
=======
  const roleChance = Math.random();
  const activeChance = Math.random();

>>>>>>> 05ee7cdcf736a836aafbb7b74e11211b4a5787c8
=======
  const roleChance = Math.random();
  const activeChance = Math.random();

>>>>>>> b1256ee15584a536b87ff6bef3242a13b22a6212
  const initialChartTypeIndex = getRandomInteger(0, 2);
  const activeSinceDate = new Date();
  let yesterdayDate = new Date();
  yesterdayDate.setDate(yesterdayDate.getDate() - 1);
  let twoDaysAgoDate = new Date();
  twoDaysAgoDate.setDate(twoDaysAgoDate.getDate() - 2);
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 05ee7cdcf736a836aafbb7b74e11211b4a5787c8
=======

>>>>>>> b1256ee15584a536b87ff6bef3242a13b22a6212
  return {
    firstName: namor.generate({ words: 1, numbers: 0 }),
    lastName: namor.generate({ words: 1, numbers: 0 }),
    age: Math.floor(Math.random() * 30),
    visits: Math.floor(Math.random() * 100),
    progress: Math.floor(Math.random() * 100),
    status:
      statusChance > 0.66
        ? 'relationship'
        : statusChance > 0.33
        ? 'complicated'
        : 'single',
    role:
      roleChance > 0.66
        ? 'developer'
        : roleChance > 0.33
        ? 'designer'
        : 'researcher',
    joined: getRandomDateJoined(),

    someone1: namor.generate({ words: 1, numbers: 0 }),
    someone2: namor.generate({ words: 1, numbers: 0 }),
    someone3: namor.generate({ words: 1, numbers: 0 }),
    someone4: namor.generate({ words: 1, numbers: 0 }),
    someone5: namor.generate({ words: 1, numbers: 0 }),
    someone6: namor.generate({ words: 1, numbers: 0 }),
    someone7: namor.generate({ words: 1, numbers: 0 }),
    someone8: namor.generate({ words: 1, numbers: 0 }),
    someone9: namor.generate({ words: 1, numbers: 0 }),
    someone10: namor.generate({ words: 1, numbers: 0 }),
    someone11: namor.generate({ words: 4, numbers: 0 }),
    someone12: namor.generate({ words: 1, numbers: 0 }),
    someone13: namor.generate({ words: 1, numbers: 0 }),
    someone14: namor.generate({ words: 1, numbers: 0 }),
    someone15: namor.generate({ words: 1, numbers: 0 }),
    someone16: namor.generate({ words: 1, numbers: 0 }),
    someone17: namor.generate({ words: 1, numbers: 0 }),
    someone18: namor.generate({ words: 1, numbers: 0 }),
    someone19: namor.generate({ words: 1, numbers: 0 }),
    someone20: namor.generate({ words: 1, numbers: 0 }),
<<<<<<< HEAD
<<<<<<< HEAD
    status:
      statusChance > 0.66
        ? 'relationship'
        : statusChance > 0.33
        ? 'complicated'
        : 'single',
=======
>>>>>>> 05ee7cdcf736a836aafbb7b74e11211b4a5787c8
=======
>>>>>>> b1256ee15584a536b87ff6bef3242a13b22a6212
    chartType:
      initialChartTypeIndex === 0
        ? inlineEditSelectItems[0]
        : initialChartTypeIndex === 1
        ? inlineEditSelectItems[1]
        : inlineEditSelectItems[2],
    activeSince:
<<<<<<< HEAD
<<<<<<< HEAD
      statusChance > 0.66
=======
      activeChance > 0.66
>>>>>>> b1256ee15584a536b87ff6bef3242a13b22a6212
        ? activeSinceDate
        : activeChance > 0.33
        ? yesterdayDate
        : '23/05/2020',
    bonus: `$\r${getRandomInteger(100, 500, 2)}`,
<<<<<<< HEAD
    status_icon: renderStatusIcon(statusChance),
    doc_link: renderDocLink(statusChance),
=======
      activeChance > 0.66
        ? activeSinceDate
        : activeChance > 0.33
        ? yesterdayDate
        : twoDaysAgoDate,
    bonus: `$\r${getRandomInteger(100, 500, 2)}`,
    passwordStrength: getPasswordStrength(),
    doc_link: renderDocLink(),
>>>>>>> 05ee7cdcf736a836aafbb7b74e11211b4a5787c8
=======
    passwordStrength: getPasswordStrength(),
    doc_link: renderDocLink(),
>>>>>>> b1256ee15584a536b87ff6bef3242a13b22a6212
  };
};

export const newPersonWithTwoLines = () => {
  return {
    firstName: (
      <>
        <div>{namor.generate({ words: 1, numbers: 0 })}</div>
        <div>{namor.generate({ words: 1, numbers: 0 })}</div>
      </>
    ),
    lastName: namor.generate({ words: 1, numbers: 0 }),
    age: Math.floor(Math.random() * 30),
  };
};

const randomDate = (start, end) => {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
};
