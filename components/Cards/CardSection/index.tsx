import React, { FC } from 'react';
import { FlatList } from 'react-native';
import { styles } from './styles';
import { CardSectionProps } from '../types';
import CardItem from '../CardItem';

const CardSection: FC<CardSectionProps> = ({data}) => {
    return (
        <FlatList
            data={data}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={styles.cardList}
            contentContainerStyle={{
                paddingRight: 25,
                alignItems: "center"
            }}
            keyExtractor={({id}: any) => id.toString()}
            renderItem={({ item }: any) => <CardItem {...item} />}
        />
    );
};

export default CardSection;