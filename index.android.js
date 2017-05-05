/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 /*
TODO
1. 목표 UI 설정
2. Component 나누기
3. 프로젝트 구조 만들기 (import, class 등)
4. Navigation 만들기
    1) flex 설명
    2) justifyContent, alignItems 설명
    3) props 설명
5.
 */

import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Button } from 'react-native';

export default class Sample extends Component {
    render() {
        return (
            <View>
                <Navigation />
                <FriendRequestList />
                <MightKnowFriendList />
            </View>
        );
    }
}

class Navigation extends Component {
    render() {
        return (
            <View style={styles.navBar}>
                <NavButton buttonName="타임라인" />
                <NavButton buttonName="친구목록" />
                <NavButton buttonName="최신소식" />
                <NavButton buttonName="기타" />
            </View>
        )
    }
}

class NavButton extends Component {
    render() {
        return (
            <View style={styles.navButton}>
                <View style={styles.navButtonLogo}>
                    <Text>{this.props.buttonName}</Text>
                </View>
            </View>
        )
    }
}

class FriendRequestList extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>친구 요청</Text>
                <FriendListItem
                    yesText="수락"
                    noText="거절"
                />
            </View>
        )
    }
}

class MightKnowFriendList extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>알 수도 있는 사람</Text>
                    <FriendListItem
                        yesText="친구 추가"
                        noText="삭제"
                    />
            </View>
        )
    }
}

class FriendListItem extends Component {
    render() {
        return (
            <View style={styles.itemContainer}>
                <View style={styles.profile}>
                    <View style={styles.picture}></View>
                </View>

                <View style={styles.friendInfo}>
                    <Text style={styles.name}>홍길동</Text>
                    <Text style={styles.withFriends}>함께 아는 친구 5명</Text>
                    <View style={styles.confirm}>
                        <View style={styles.yes}>
                            <Button title={this.props.yesText}></Button>
                        </View>
                        <View style={styles.no}>
                            <Button title={this.props.noText}></Button>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    navBar: {   // 상단 바
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderWidth: 0.5
    },
    navButton: {    // 상단 바 내부의 버튼
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    navButtonLogo: {    // 버튼의 그림이 들어갈 영역
        height: 50,
        width: 50,
        backgroundColor: 'gray'
    },
    container: {    // FriendRequestList, MightKnowFriendList에 적용됨
        padding: 10
    },

    itemContainer: {    // 친구 정보 container
        flexDirection: 'row',
        borderWidth: 0.5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    profile: {  // 프로필 사진
        flex: 1,
        marginRight: 10
    },
    picture: {
        backgroundColor: 'gray',
        height: 100
    },
    friendInfo: {
        flex: 3
    },
    confirm: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10
    },
    yes: {
        flex: 1,
        marginRight: 5
    },
    no: {
        flex: 1,
        marginLeft: 5
    }
});

AppRegistry.registerComponent('Sample', () => Sample);
