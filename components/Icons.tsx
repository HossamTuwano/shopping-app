import { View, Text } from 'react-native'
import React, { ReactNode } from 'react'
import { Entypo } from '@expo/vector-icons'

type IconsProps = {
  name: string
  size: number
  color: string
}

export default function Icons(
  { name, size, color }: IconsProps,
  children: ReactNode
) {
  return children
}
