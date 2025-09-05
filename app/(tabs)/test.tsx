import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Image } from 'expo-image';
export default function Test() {
  return (
    <ParallaxScrollView 
          headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
          headerImage={
            <Image 
                source={require('@/assets/images/icon.png')}
            />
        }>
        <ThemedView >
            <ThemedText style={{ fontFamily: 'SpaceMono', color:"black" }}>
                Hello this is test okok
            </ThemedText>
        </ThemedView>
    </ParallaxScrollView>
)

}

