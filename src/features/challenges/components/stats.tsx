import {
    Card,
    Heading,
    Skeleton,
    VStack,
    Text,
    Divider,
} from '@chakra-ui/react'
import moment, { Moment } from 'moment'

interface StatsProps {
    challenge?: Challenge
    progress?: Progress
}

const Stats = ({ progress, challenge }: StatsProps) => {
    const weeksBetween = (beginnning: Moment, end: Moment) => {
        const duration = moment.duration(end.diff(beginnning))
        return duration.asWeeks()
    }

    return (
        <Card w={'full'} p={2}>
            <VStack alignItems={'center'}>
                <Heading size="md">Stats</Heading>
                <Divider />
                <Skeleton
                    minH={100}
                    w={'full'}
                    isLoaded={!!(progress && challenge)}
                >
                    <VStack>
                        <Text>Progress: {progress?.percent.toFixed(2)}%</Text>
                        <Text>
                            Covered: {progress?.distanceCovered.toFixed(2)} km
                        </Text>
                        <Text>
                            Remaining:{' '}
                            {challenge &&
                                progress &&
                                (
                                    challenge.target.totalDistance -
                                    progress.distanceCovered
                                ).toFixed(2)}{' '}
                            km
                        </Text>
                        <Text>
                            Required Avg / Week:{' '}
                            {challenge &&
                                progress &&
                                (
                                    (challenge.target.totalDistance -
                                        progress.distanceCovered) /
                                    weeksBetween(
                                        moment(moment.now()),
                                        moment(challenge?.endDate)
                                    )
                                ).toFixed(2)}{' '}
                            km
                        </Text>
                    </VStack>
                </Skeleton>
            </VStack>
        </Card>
    )
}

export default Stats
