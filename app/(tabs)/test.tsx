import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Button } from 'react-native';

import { decrement, increment } from '@/redux/counterSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import store from '@/redux/store';
import { Provider } from 'react-redux';
// import { useDispatch, useSelector } from 'react-redux';
export default function Counter() {
    const count = useAppSelector((state)=>state.counter.value)
    const dispatch = useAppDispatch()
  return (
    <Provider store={store}>
        <ThemedView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

            <ThemedText style={{ fontFamily: 'SpaceMono', color: 'black' }}>
                Counter Value: {count}
            </ThemedText>
            <Button title='increase' onPress={() => dispatch(increment())} />
                {count > 0 ? (
                    <Button title='decrease' onPress={() => dispatch(decrement())} />)
                    : (<Button title='decrease' disabled={true}/>)
                }

        </ThemedView>
    </Provider>
    )

}

