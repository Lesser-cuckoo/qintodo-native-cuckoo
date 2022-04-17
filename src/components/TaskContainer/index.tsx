import React, { useEffect, useState } from "react";
import { View, Text, Dimensions } from "react-native";
import tw from "twrnc";

import Board, { Repository } from "react-native-dnd-board";
import { getTodo, TodoType } from "src/libs/SupabaseClient";
import { useUser } from "src/components/UserContext";

const baseData: ColumnProps[] = [
  {
    id: "today",
    text: "今日する",
    rows: [],
  },
  {
    id: "tomorrow",
    text: "明日する",
    rows: [],
  },
  {
    id: "other",
    text: "今度する",
    rows: [],
  },
];

type CardProps = {
  id: string;
  task: string;
};

type ColumnProps = {
  id: string;
  text: string;
  rows: CardProps[];
};

const COLUMN_WIDTH = Dimensions.get("window").width * 0.8;

export const TaskContainer = () => {
  const { user } = useUser();
  const [repository, setRepository] = useState(new Repository(baseData));

  const updateData = async () => {
    const data = baseData;
    const today = await getTodo("today");
    data[0].rows = today.map((todo) => {
      return {
        id: String(todo.id),
        task: todo.task,
      };
    });
    const tomorrow = await getTodo("tomorrow");
    data[1].rows = tomorrow.map((todo) => {
      return {
        id: String(todo.id),
        task: todo.task,
      };
    });
    const other = await getTodo("other");
    data[2].rows = other.map((todo) => {
      return {
        id: String(todo.id),
        task: todo.task,
      };
    });
    setRepository(new Repository(data));
  };

  useEffect(() => {
    if (user) {
      updateData();
    }
  }, [user]);

  const renderCard = ({ item }: { item: TodoType }) => {
    return (
      <View style={tw`py-1 mx-4`}>
        <Text style={tw`text-lg`}>{item.task}</Text>
      </View>
    );
  };

  const renderColumn = ({
    item,
    columnComponent,
    layoutProps,
  }: {
    item: ColumnProps;
    columnComponent: any;
    layoutProps: any;
  }) => {
    let color = "text-[#FFCA3A]";
    if (item.id == "today") color = "text-[#F43F5E]";
    if (item.id == "tomorrow") color = "text-[#FB923C]";

    return (
      <View {...layoutProps}>
        <View style={tw`mt-4 mb-2`}>
          <Text style={tw`font-bold text-2xl ${color}`}>{item.text}</Text>
        </View>
        {columnComponent}
      </View>
    );
  };

  const onCardPress = (card: TodoType) => {
    alert("Card ID: " + card.id);
  };

  const onDragEnd = (
    fromColumnId: string,
    toColumnId: string,
    card: TodoType
  ) => {
    alert(`from : ${fromColumnId} to: ${toColumnId} card: ${card.id}`);
  };

  return (
    <Board
      repository={repository}
      renderRow={renderCard}
      renderColumnWrapper={renderColumn}
      onRowPress={onCardPress}
      onDragEnd={onDragEnd}
      columnWidth={COLUMN_WIDTH}
      horizontal={false}
      activeRowRotation={0}
    />
  );
};
