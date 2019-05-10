# KBLTalkServer
아이폰 스터디용 데모서버

Usage
=================================================================
	1.install Node.js
	
	2.move KBLTalk folder
	
	3.excute /KBLTalk/bin/www -> node www

API
=================================================================
	로그인
-----------------------------------------------------------------
request

type: post

URI : /login

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


	친구추가(서버메모리에 저장되며 서버 재시작 시 데이터X)
-----------------------------------------------------------------
request

type: post

URI : /addFriend

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
