import { View, Text, Touchable } from 'react-native'
import React, { ReactNode, useState } from 'react'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { useTheme } from '@react-navigation/native'
import {
  SafeAreaView,
  useSafeAreaFrame,
  useSafeAreaInsets,
} from 'react-native-safe-area-context'

const MIN_PRICE = 0
const MAX_PRICE = 500
const COLORS = [
  {
    color: 'red',
    label: 'Red',
    itemCount: 4,
  },
  {
    color: 'blue',
    label: 'Blue',
    itemCount: 2,
  },
  {
    color: 'yellow',
    label: 'Yellow',
    itemCount: 6,
  },
  {
    color: 'purple',
    label: 'Purple',
    itemCount: 10,
  },
]

const SLEEVES = [
  {
    id: 'sortsleeve',
    label: 'Sort Sleeve',
    itemCount: 20,
  },
  {
    id: 'longsleeve',
    label: 'Long Sleeve',
    itemCount: 100,
  },
  {
    id: 'sleevless',
    label: 'Sleeve Less',
    itemCount: 60,
  },
]
const FilterView = () => {
  const [minPrice, setMinPrice] = useState(50)
  const [maxPrice, setMaxPrice] = useState(250)
  const theme = useTheme()
  const insets = useSafeAreaInsets()
  return (
    <View style={{ paddingVertical: 24, gap: 24 }}>
      <ScrollView style={{ flex: 1 }}>
        <View style={{ paddingVertical: 24, gap: 24 }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 24,
            }}
          >
            <Text style={{ flex: 1, fontSize: 20, fontWeight: '700' }}>
              Filters
            </Text>
            <TouchableOpacity>
              <Text>Reset</Text>
            </TouchableOpacity>
          </View>
          {/* Range Selector */}
          <View style={{ paddingHorizontal: 24 }}>
            <View style={{ marginBottom: 24 }}>
              <Text>Price Range</Text>
            </View>
            <View
              style={{
                height: 1,
                width: '100%',
                backgroundColor: theme.colors.border,
                position: 'relative',
              }}
            >
              <View
                style={{
                  position: 'absolute',
                  left: `${(100 * minPrice) / MAX_PRICE}%`,
                  width: `${(minPrice * (maxPrice - minPrice)) / MAX_PRICE}%`,
                  height: '100%',
                  backgroundColor: theme.colors.primary,
                }}
              />
              <View
                style={{
                  position: 'absolute',
                  left: '100%',
                  height: 24,
                  aspectRatio: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 100,
                  borderColor: theme.colors.primary,
                  borderWidth: 1,
                  backgroundColor: theme.colors.background,
                  top: -12,
                  transform: [{ translateX: -12 }, { translateY: -12 }],
                }}
              >
                <View
                  style={{
                    width: 3,
                    height: 3,
                    borderRadius: 10,
                    backgroundColor: theme.colors.primary,
                  }}
                />
              </View>
              <View style={{ position: 'absolute', left: '10%' }}>
                <SliderHandle />
              </View>
              <View style={{ position: 'absolute', left: '50%' }}>
                <SliderHandle />
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: 12,
              }}
            >
              <Text style={{ color: theme.colors.text, opacity: 0.5 }}>
                ${MIN_PRICE}
              </Text>
              <Text style={{ color: theme.colors.text, opacity: 0.5 }}>
                ${MAX_PRICE}
              </Text>
            </View>
          </View>
          {/* Sports Category Filter */}
          <View style={{ paddingHorizontal: 24 }}>
            <Text style={{ fontSize: 16, fontWeight: '600', marginBottom: 12 }}>
              Sports
            </Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 12 }}>
              {new Array(7).fill('').map((_, i) => {
                const isSelected = i === 0
                return <Chip itemCount={i} label='Item' isSelected={i === 0} />
              })}
            </View>
          </View>
          {/* Color Filter */}
          <View style={{ paddingHorizontal: 24 }}>
            <Text style={{ fontSize: 16, fontWeight: '600', marginBottom: 12 }}>
              Color
            </Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 12 }}>
              {COLORS.map((item, i) => {
                const isSelected = i === 0
                return (
                  <Chip
                    itemCount={item.itemCount}
                    label={item.label}
                    isSelected={i === 0}
                    left={
                      <View
                        style={{
                          backgroundColor: item.color,
                          width: 12,
                          height: 12,
                          borderRadius: 8,
                        }}
                      />
                    }
                  />
                )
              })}
            </View>
          </View>
          {/* Sleeves Filter */}
          <View style={{ paddingHorizontal: 24 }}>
            <Text style={{ fontSize: 16, fontWeight: '600', marginBottom: 12 }}>
              Color
            </Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 12 }}>
              {SLEEVES.map((item, i) => {
                const isSelected = i === 0
                return (
                  <Chip
                    itemCount={item.itemCount}
                    label={item.label}
                    isSelected={i === 0}
                  />
                )
              })}
            </View>
          </View>
          {/* Button  */}
          <View style={{ padding: 24, paddingBottom: 24 + insets.bottom }}>
            <TouchableOpacity
              style={{
                backgroundColor: theme.colors.primary,
                height: 64,
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '600',
                  color: theme.colors.background,
                }}
              >
                Apply filters
              </Text>
              <View
                style={{
                  backgroundColor: theme.colors.card,
                  width: 40,
                  aspectRatio: 1,
                  borderRadius: 40,
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'absolute',
                  top: 12,
                }}
              >
                {/* icon here arrow right size 24 colro text */}
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default FilterView

const SliderHandle = () => {
  const theme = useTheme()
  return (
    <View
      style={{
        position: 'absolute',
        left: '100%',
        height: 24,
        aspectRatio: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        borderColor: theme.colors.primary,
        borderWidth: 1,
        backgroundColor: theme.colors.background,
        top: -12,
        transform: [{ translateX: -12 }, { translateY: -12 }],
      }}
    >
      <View
        style={{
          width: 3,
          height: 3,
          borderRadius: 10,
          backgroundColor: theme.colors.primary,
        }}
      />
    </View>
  )
}

const Chip = ({
  isSelected,
  label,
  itemCount,
  left,
}: {
  isSelected: boolean
  label: string
  itemCount: number
  left?: ReactNode
}) => {
  const theme = useTheme()
  return (
    <View
      style={{
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 100,
        backgroundColor: isSelected
          ? theme.colors.text
          : theme.colors.background,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 12,
        right: 12,
        bottom: 12,
      }}
    >
      {!!left && <View style={{ marginRight: 4 }}>{left}</View>}
      <Text
        style={{
          fontSize: 14,
          fontWeight: '600',
          color: isSelected ? theme.colors.background : theme.colors.text,
        }}
      >
        {label} {itemCount}
      </Text>
    </View>
  )
}
