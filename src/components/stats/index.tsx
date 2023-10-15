import {
    Card,
    Container,
    Heading,
    Skeleton,
    VStack,
    Wrap,
    Text,
} from '@chakra-ui/react'
import moment, { Moment } from 'moment'

interface StatsProps {
    challenge?: Challenge
    progress?: Progress
}

const Stats: React.FC<StatsProps> = (props) => {
    const weeksBetween = (beginnning: Moment, end: Moment) => {
        const duration = moment.duration(end.diff(beginnning))
        return duration.asWeeks()
    }

    const content = () => {
        if (!props.progress || !props.challenge)
            return <Skeleton h={100} w={'full'} />

        return (
            <VStack>
                <Text>Progress: {props.progress.percent.toFixed(2)}%</Text>
                <Text>
                    Covered: {props.progress.distanceCovered.toFixed(2)}Km
                </Text>
                <Text>
                    Remaining:{' '}
                    {(
                        props.challenge.target.totalDistance -
                        props.progress.distanceCovered
                    ).toFixed(2)}
                    Km
                </Text>
                <Text>
                    Required Avg / Week:{' '}
                    {(
                        props.challenge.target.totalDistance /
                        weeksBetween(
                            moment(moment.now()),
                            moment(props.challenge.endDate)
                        )
                    ).toFixed(2)}
                    Km
                </Text>
            </VStack>
        )
    }

    return (
        <Card w={'full'} h={'full'} p={2}>
            <VStack alignItems={'center'}>
                <Heading size="md">Stats</Heading>
                {content()}
            </VStack>
        </Card>
    )
}

export default Stats
