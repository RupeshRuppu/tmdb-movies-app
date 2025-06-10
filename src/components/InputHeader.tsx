import React, {useState, useMemo, useContext} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme';
import CustomIcon from './CustomIcon';
import {debounce} from '../util/debounce';
import {useSearchContext} from '../customHooks/SearchHook';

const InputHeader = (props: any) => {
  const debounceSearch = useMemo(() => debounce(props.searchFunction), []);
  const {setSearchInput, searchInput} = useSearchContext();

  return (
    <View style={styles.inputBox}>
      <TextInput
        style={styles.textInput}
        onChangeText={inputText => {
          setSearchInput(inputText);
          debounceSearch(inputText);
        }}
        onFocus={props.onFocus}
        placeholder="Search Your Movies..."
        placeholderTextColor={COLORS.WhiteRGBA32}
        value={searchInput}
        autoFocus={props.autoFocus}
      />
      <TouchableOpacity onPress={() => props.searchFunction(searchInput)}>
        <CustomIcon
          name="search"
          color={COLORS.Orange}
          size={FONTSIZE.size_20}
        />
      </TouchableOpacity>
    </View>
  );
};

export default InputHeader;

const styles = StyleSheet.create({
  inputBox: {
    paddingHorizontal: SPACING.space_24,
    paddingVertical: SPACING.space_8,
    borderWidth: 2,
    borderColor: COLORS.WhiteRGBA15,
    borderRadius: BORDERRADIUS.radius_25,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    width: '90%',
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_14,
    color: COLORS.White,
  },
});
