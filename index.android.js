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
5. 새로운 component 클래스 추가
6. 간단한 스타일 적용
7. FriendListItem 제작
    1) flex를 적용하여 레이아웃 만들기
    2) Button을 View로 감싸 스타일 적용
    3) props를 이용하여 용도에 따라 텍스트 변경
8. state와 props 설명
    1) 초기화 및 setState를 이용하여 값 수정 설명
    2) Lifecycle API 설명
    3) props로 전달하여 컴포넌트 동적으로 생성
 */

import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Button, ScrollView } from 'react-native';

// import update from 'react-addons-update';

export default class Sample extends Component {

    constructor(props) {
        super(props);

        this.state = {
            friendRequests: [
                {
                    name: "권장호",
                    withFriends: 5
                }, {
                    name: "김기준",
                    withFriends: 3
                }
            ],
            mightKnowFriends: [
                {
                    name: "김기황",
                    withFriends: 4
                }, {
                    name: "김대혁",
                    withFriends: 1
                }
            ]
        }
    }

    componentDidMount() {
        // 여기서 ajax 등 비동기 통신을 통해 데이터를 받아옴
        const requests = [
            ...this.state.friendRequests,
            {
                name: "김성래",
                withFriends: 3
            }
        ]

        this.setState({
            friendRequests: requests
        })
    }

    render() {
        return (
            <ScrollView>
                <Navigation />
                <FriendRequestList
                    list={this.state.friendRequests}
                />

                <MightKnowFriendList
                    list={this.state.mightKnowFriends}
                />
            </ScrollView>
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
    constructor(props) {
        super(props)

        console.log(this.props.list);

    }

    render() {

        let requests = this.props.list.map((a, i) => {
            return <FriendListItem key={i} name={a.name} withFriends={a.withFriends} yesText="수락" noText="거절" />
        })

        return (
            <View style={styles.container}>
                <Text style={styles.listText}>친구 요청</Text>

                {requests}
            </View>
        )
    }
}

class MightKnowFriendList extends Component {
    render() {

        let requests = this.props.list.map((a, i) => {
            return <FriendListItem key={i} name={a.name} withFriends={a.withFriends} yesText="친구 추가" noText="삭제" />
        })

        return (
            <View style={styles.container}>
                <Text style={styles.listText}>알 수도 있는 사람</Text>

                { requests }
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
                    <Text style={styles.name}>{this.props.name}</Text>
                    <Text style={styles.withFriends}>함께 아는 친구 {this.props.withFriends}명</Text>
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
        alignItems: 'center',
        marginBottom: 10
    },
    listText: {
        marginBottom: 5
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
        flex: 3,
        padding: 5
    },
    confirm: {  // Button 자체에 style이 적용되지 않음
                // 그렇기 때문에 Button을 View로 감싸야 됨
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10
    },
    yes: {  // Button이 아니라 감싸고 있는 View에 style을 적용함
        flex: 1,
        marginRight: 5
    },
    no: {
        flex: 1,
        marginLeft: 5
    }
});

AppRegistry.registerComponent('Sample', () => Sample);
