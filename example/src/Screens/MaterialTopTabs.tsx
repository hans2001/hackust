import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import type { ParamListBase } from '@react-navigation/native';
import type { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';

import Albums from '../Shared/Albums';
import Article from '../Shared/Article';
import Chat from '../Shared/Chat';
import Contacts from '../Shared/Contacts';
import Design from '../Shared/Design';
import NewsFeed from '../Shared/NewsFeed';
import SettingsItem from '../Shared/SettingsItem';

type MaterialTopTabParams = {
  Market: undefined;
  Forum: undefined;
  Run: undefined;
  Share: undefined;
};

const MaterialTopTabs = createMaterialTopTabNavigator<MaterialTopTabParams>();

export default function MaterialTopTabsScreen({
  navigation,
}: StackScreenProps<ParamListBase>) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      cardStyle: { flex: 1 },
    });
  }, [navigation]);

  return (
    <MaterialTopTabs.Navigator>
      <MaterialTopTabs.Screen
        name="Run"
        component={Article}
        options={{ title: 'Run' }}
      />
      <MaterialTopTabs.Screen
        name="Share"
        component={NewsFeed}
        options={{ title: 'Share' }}
      />
      <MaterialTopTabs.Screen
        name="Forum"
        component={Contacts}
        options={{ title: 'Forum' }}
      />
      <MaterialTopTabs.Screen
        name="Market"
        component={Albums}
        options={{ title: 'Market' }}
      />
      <MaterialTopTabs.Screen
        name="Design"
        component={Design}
        options={{ title: 'design' }}
      />
    </MaterialTopTabs.Navigator>
  );
}
