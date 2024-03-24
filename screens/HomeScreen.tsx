import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native'
import React, { useCallback, useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useTheme } from '@react-navigation/native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import MasonryList from 'reanimated-masonry-list'
import { BlurView } from 'expo-blur'
import BottomSheet, {
  BottomSheetModal,
  BottomSheetView,
} from '@gorhom/bottom-sheet'
import CustomBackdrop from '../components/CustomBackdropt'

const AVATAR_URL =
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

const CATEGORIES = [
  'Clothing',
  'Shoes',
  'Accessories',
  'Accessories 1',
  'Accessories 3',
  'Accessories 4',
]
export default function HomeScreen() {
  const { colors } = useTheme()
  const [categoryIndex, setCategoryIndex] = useState<number>(0)
  const bottomSheetModalRef = useRef<BottomSheetModal>(null)

  const openFilterModal = useCallback(() => {
    bottomSheetModalRef.current?.present()
  }, [])

  return (
    <ScrollView>
      <SafeAreaView style={{ paddingVertical: 24, gap: 24 }}>
        {/* Header Section */}
        <View
          style={{
            paddingHorizontal: 24,
            flexDirection: 'row',
            alignItems: 'center',
            gap: 8,
          }}
        >
          <Image
            source={{ uri: AVATAR_URL }}
            style={{
              width: 52,
              aspectRatio: 1,
              borderRadius: 52,
            }}
            resizeMode='cover'
          />
          <View style={{ flex: 1 }}>
            <Text
              numberOfLines={1}
              style={{
                marginBottom: 12,
                fontSize: 18,
                fontWeight: '600',
                color: colors.text,
              }}
            >
              Hi, James 👋{' '}
            </Text>
            <Text
              style={{ opacity: 0.5, color: colors.text }}
              numberOfLines={1}
            >
              Discover fashion that suit your style
            </Text>
          </View>
          <TouchableOpacity
            style={{
              width: 52,
              aspectRatio: 1,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 52,
              borderWidth: 1,
              borderColor: colors.border,
            }}
          >
            <MaterialCommunityIcons
              name='bell-circle-outline'
              size={24}
              color={colors.text}
            />
          </TouchableOpacity>
        </View>
        {/* Search Bar Section */}
        <View style={{ flexDirection: 'row', paddingHorizontal: 24, gap: 12 }}>
          <TouchableOpacity
            style={{
              flex: 1,
              height: 52,
              borderRadius: 1,
              borderColor: colors.border,
              borderWidth: 1,
              alignItems: 'center',
              paddingHorizontal: 24,
              flexDirection: 'row',
              gap: 12,
            }}
          >
            {/* <Icon
              name='search'
              size={24}
              color={colors.text}
              style={{ opacity: 0.5 }}
            /> */}
            <Text>Icon Here</Text>
            <Text
              style={{
                flex: 1,
                fontSize: 16,
                color: colors.text,
                opacity: 0.5,
              }}
            >
              Search
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 52,
              aspectRatio: 1,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 52,
              borderWidth: 1,
              borderColor: colors.border,
            }}
          >
            {/* change to filter icon here */}
            <MaterialCommunityIcons
              name='bell-circle-outline'
              size={24}
              color={colors.text}
            />
          </TouchableOpacity>
        </View>

        {/* Gird Collection View*/}
        <View style={{ paddingHorizontal: 24 }}>
          {/* Title bar*/}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Text style={{ fontSize: 22, fontWeight: '700' }}>
              New Collections
            </Text>
            <TouchableOpacity>
              <Text>See All</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flexDirection: 'row', height: 200, gap: 12 }}>
          <Card />
          <View style={{ flex: 1, gap: 12 }}>
            <Card />
            <Card />
          </View>
          <Card />
          <View style={{ flex: 1 }}></View>
        </View>
        {/* Categories Section  */}
        <FlatList
          data={CATEGORIES}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 16,
            gap: 12,
          }}
          renderItem={({ item, index }) => {
            const isSelected = categoryIndex == index
            return (
              <TouchableOpacity
                onPress={() => setCategoryIndex(index)}
                style={{
                  backgroundColor: isSelected ? colors.primary : colors.card,
                  paddingHorizontal: 24,
                  paddingVertical: 16,
                  borderRadius: 100,
                  borderWidth: isSelected ? 0 : 1,
                  borderColor: colors.border,
                }}
              >
                <View
                  style={{
                    backgroundColor: isSelected ? colors.primary : colors.card,
                  }}
                >
                  <Text
                    style={{
                      color: isSelected ? colors.background : colors.text,
                      fontWeight: '600',
                      fontSize: 16,
                      opacity: isSelected ? 1 : 0.5,
                    }}
                  >
                    {item}
                  </Text>
                </View>
              </TouchableOpacity>
            )
          }}
        />

        {/* Masonry */}
        <MasonryList
          data={[1, 2, 3, 4, 5]}
          keyExtractor={(item): string => item}
          numColumns={2}
          contentContainerStyle={{ paddingHorizontal: 12 }}
          containerStyle={{}}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, i }) => (
            <View style={{ padding: 6 }}>
              <View
                style={{
                  aspectRatio: i === 0 ? 1 : 2 / 3,
                  position: 'relative',
                  backgroundColor: 'red',
                  overflow: 'hidden',
                  borderRadius: 24,
                }}
              >
                <Image source={{ uri: 'link/to/img' }} resizeMode='cover' />
                <View style={[StyleSheet.absoluteFill, { padding: 12 }]}>
                  <View style={{ flexDirection: 'row', gap: 8, padding: 4 }}>
                    <Text
                      style={{
                        flex: 1,
                        fontSize: 16,
                        fontWeight: '600',
                        color: colors.text,
                      }}
                    >
                      PUMA Everyday Hussle
                    </Text>
                    <View
                      style={{
                        backgroundColor: '#fff',
                        borderRadius: 100,
                        height: 32,
                        width: 32,
                        aspectRatio: 1,
                        alignItems: 'center',
                      }}
                    >
                      {/* favorite icon here black color: colors.text size 24 */}
                    </View>
                  </View>
                  <View style={{ flex: 1 }}></View>
                  <BlurView
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      backgroundColor: 'rgba(0,0,0,.5)',
                      padding: 8,
                      borderRadius: 100,
                      overflow: 'hidden',
                    }}
                    intensity={20}
                  >
                    <Text
                      style={{
                        flex: 1,
                        fontSize: 16,
                        fontWeight: '600',
                        color: '#fff',
                        marginLeft: 4,
                      }}
                      numberOfLines={1}
                    >
                      $160.00
                    </Text>
                    <TouchableOpacity
                      style={{
                        paddingHorizontal: 16,
                        paddingVertical: 8,
                        borderRadius: 100,
                        backgroundColor: '#fff',
                      }}
                    >
                      {/* shopping cart icon here black color */}
                    </TouchableOpacity>
                  </BlurView>
                </View>
              </View>
            </View>
          )}
          onEndReachedThreshold={0.1}
        />
      </SafeAreaView>
      <BottomSheetModal
        snapPoints={['80%']}
        index={0}
        ref={bottomSheetModalRef}
        backdropComponent={(props) => <CustomBackdrop {...props} />}
      >
        <Text>Modal</Text>
      </BottomSheetModal>
    </ScrollView>
  )
}

const Card = () => {
  return (
    <View
      style={{
        flex: 1,
        height: 200,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1709248835088-03bb0946d6ab?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        }}
        resizeMode='cover'
        style={{ position: 'absolute', top: 0, left: 0, right: 0 }}
      />
      <View
        style={{
          position: 'absolute',
          left: 16,
          top: 16,
          paddingHorizontal: 12,
          paddingVertical: 12,
          backgroundColor: 'rgba(0,0,0,.25)',
        }}
      >
        <Text style={{ fontSize: 14, fontWeight: '600', color: '#fff' }}></Text>
      </View>
    </View>
  )
}
