# KBLTalkServer
아이폰 스터디용 데모서버

Usage
=================================================================
	1.install Node.js -> https://nodejs.org/ko/
	
	2.download and move /KBLTalk/bin/ folder
	
	3.excute -> node www

API
=================================================================

	로그인
	-----------------------------------------------------------------
	request

	type: post

	URI : users/login

	prameter: 
	id: 홍길동
	pw: 1234
	*hardcoded data lhw/1234, bks/1234, kwy/1234

	response
	{
	    "result": {
		"resultCode": "001",
		"resultMsg": "success"
	    }
	}

	회원가입
	-----------------------------------------------------------------
	request

	type: post

	URI : users/register

	prameter: 
	id: 홍길동
	pw: 1234
	profilePath: 사진경로 or 기타 필요 텍스트(사진업로드X)

	response
	{
	    "result": {
		"resultCode": "001",
		"resultMsg": "success"
	    }
	}


	친구추가(서버메모리에 저장되며 서버 재시작 시 데이터X)
	-----------------------------------------------------------------
	request

	type: post

	URI : /addFriend

	prameter: 
	id: 홍길동
	profilePath: 사진경로 or 기타 필요 텍스트(사진업로드X) //정상적인 DB 가 서버에 들어가면 필요 없음

	response
	{
	    "result": {
		"resultCode": "001",
		"resultMsg": "success"
	    }
	}

	친구조회
	-----------------------------------------------------------------
	request

	type: post

	URI : /getFriends

	prameter: 
		- none

	response
		list empty -> 
		{
		    "result": {
			"resultCode": "002",
			"resultMsg": "emptyList"
		    }
		}

		list not empty  ->
		{
		    "result": {
			"resultCode": "001",
			"resultMsg": "success"
		    },
		    "data": [
			{
			    "id": "test",
			    "pw": "fsdfs",
			    "profilePath": "12345"
			},
			{
			    "id": "test1",
			    "pw": "fsdfs",
			    "profilePath": "12345432"
			},
			{
			    "id": "test3",
			    "pw": "fsdfs",
			    "profilePath": "12345432"
			}
		    ]
	}

	APNS전송
	-----------------------------------------------------------------
	request

	type: post

	URI : apns/sendAPNS

	prameter: 
	senderId : lhw
    	receiverId : kwy
    	sendMessage : 전송할메세지
    	//for demo
    	receiverRegId : deviceToken(ex: "9703A5BBDB396790F792B69B0126968BCE17BFC18DD3E8B8BDBB634A48299817")

	response
	{
	    "result": {
		"resultCode": "001",
		"resultMsg": "success"
	    }
	}
