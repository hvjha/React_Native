import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
    ScrollView,
} from 'react-native';

const LifeCycle = () => {
    const [count, setCount] = useState(0);
    const [date, setDate] = useState(new Date());

    const currentMonth = date.getMonth();
    const currentYear = date.getFullYear();
    const currentDate = date.getDate();

    useEffect(() => {
        console.warn('count changed', count);
    }, [count]);

    useEffect(() => {
        const timer = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const displayHours = hours % 12 || 12;
    const ampm = hours >= 12 ? 'PM' : 'AM';

    const formatTime = (value:any) => {
        return value.toString().padStart(2, '0');
    };

    const day = date.toLocaleDateString('en-US', {
        weekday: 'long',
    });

    const calendarDate = date.toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

    // Calendar
    const monthName = date.toLocaleDateString('en-US', {
        month: 'long',
    });

    const firstDay = new Date(
        currentYear,
        currentMonth,
        1
    ).getDay();

    const daysInMonth = new Date(
        currentYear,
        currentMonth + 1,
        0
    ).getDate();

    const days = [];

    for (let i = 0; i < firstDay; i++) {
        days.push('');
    }

    for (let i = 1; i <= daysInMonth; i++) {
        days.push(i);
    }

    return (
        <ScrollView
            style={style.container}
            contentContainerStyle={style.content}
            showsVerticalScrollIndicator={false}
        >

            <Text style={style.textHeader}>
                Life Cycle Method
            </Text>

            <View style={style.card}>

                <Text style={style.label}>
                    Current Count
                </Text>

                <Text style={style.text}>
                    {count}
                </Text>

                <View style={style.btn}>
                    <Button
                        title="Update Count"
                        onPress={() => setCount(count + 1)}
                    />
                </View>

            </View>

            <View style={style.digitalCard}>

                <Text style={style.label}>
                    Digital Clock
                </Text>

                <Text style={style.clock}>
                    {formatTime(displayHours)}:
                    {formatTime(minutes)}:
                    {formatTime(seconds)}
                </Text>

                <Text style={style.ampm}>
                    {ampm}
                </Text>

                <Text style={style.day}>
                    {day}
                </Text>

                <Text style={style.calendar}>
                    {calendarDate}
                </Text>

            </View>

            <View style={style.calendarCard}>

                <Text style={style.label}>
                    Calendar
                </Text>

                <Text style={style.month}>
                    {monthName} {currentYear}
                </Text>

                <View style={style.weekRow}>
                    <Text style={style.weekDay}>Sun</Text>
                    <Text style={style.weekDay}>Mon</Text>
                    <Text style={style.weekDay}>Tue</Text>
                    <Text style={style.weekDay}>Wed</Text>
                    <Text style={style.weekDay}>Thu</Text>
                    <Text style={style.weekDay}>Fri</Text>
                    <Text style={style.weekDay}>Sat</Text>
                </View>

                <View style={style.calendarGrid}>

                    {days.map((day, index) => {

                        const isToday = day === currentDate;

                        return (
                            <View
                                key={index}
                                style={style.dayBox}
                            >
                                <View
                                    style={[
                                        style.dayCircle,
                                        isToday && style.today,
                                    ]}
                                >
                                    <Text
                                        style={[
                                            style.dayText,
                                            isToday && style.todayText,
                                        ]}
                                    >
                                        {day}
                                    </Text>
                                </View>
                            </View>
                        );
                    })}

                </View>

            </View>

        </ScrollView>
    );
};

const style = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#f2f4f7',
    },

    content: {
        padding: 20,
        paddingBottom: 40,
    },

    textHeader: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ffffff',
        backgroundColor: '#0d3d19',
        paddingVertical: 18,
        borderRadius: 12,
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 20,
    },

    card: {
        backgroundColor: '#ffffff',
        borderRadius: 16,
        padding: 25,
        alignItems: 'center',
        elevation: 5,

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.15,
        shadowRadius: 5,

        marginBottom: 20,
    },

    digitalCard: {
        backgroundColor: '#ffffff',
        borderRadius: 16,
        padding: 25,
        alignItems: 'center',
        elevation: 5,

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.15,
        shadowRadius: 5,

        marginBottom: 20,
    },

    calendarCard: {
        backgroundColor: '#ffffff',
        borderRadius: 16,
        padding: 20,
        elevation: 5,

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.15,
        shadowRadius: 5,

        marginBottom: 20,
    },

    label: {
        fontSize: 18,
        fontWeight: '600',
        color: '#555',
        marginBottom: 15,
    },

    text: {
        fontSize: 45,
        fontWeight: 'bold',
        color: '#2563eb',
        backgroundColor: '#eff6ff',
        borderRadius: 12,
        width: 100,
        height: 100,
        textAlign: 'center',
        textAlignVertical: 'center',
        marginBottom: 25,
    },

    btn: {
        width: '70%',
        borderRadius: 10,
        overflow: 'hidden',
    },

    clock: {
        fontSize: 38,
        fontWeight: 'bold',
        color: '#0d3d19',
        letterSpacing: 2,
        marginBottom: 5,
    },

    ampm: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#2563eb',
        marginBottom: 15,
    },

    day: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
    },

    calendar: {
        fontSize: 16,
        color: '#666',
    },

    month: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#0d3d19',
        textAlign: 'center',
        marginBottom: 20,
    },

    weekRow: {
        flexDirection: 'row',
        width: '100%',
        marginBottom: 10,
    },

    weekDay: {
        width: '14.28%',
        textAlign: 'center',
        fontSize: 13,
        fontWeight: 'bold',
        color: '#666',
    },

    calendarGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
    },

    dayBox: {
        width: '14.28%',
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
    },

    dayCircle: {
        width: 35,
        height: 35,
        borderRadius: 18,
        justifyContent: 'center',
        alignItems: 'center',
    },

    dayText: {
        fontSize: 16,
        color: '#333',
    },

    today: {
        backgroundColor: '#0d3d19',
    },

    todayText: {
        color: '#ffffff',
        fontWeight: 'bold',
    },
});

export default LifeCycle;