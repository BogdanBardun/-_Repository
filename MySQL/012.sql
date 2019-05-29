SELECT photo_post.NAME, COALESCE(
(SELECT COUNT(*) FROM niepcedb.photo_post
JOIN niepcedb.USER ON USER.USER_ID = photo_post.USER_ID
WHERE DAY(photo_post.CREATION_DATE) = 9
AND MONTH(photo_post.CREATION_DATE) = 5
AND photo_post.USER_ID = usersTable.USER_ID ), 0) as 'Number of posts'
FROM niepcedb.PHOTO_POST
RIGHT JOIN niepcedb.USER as usersTable ON usersTable.USER_ID = PHOTO_POST.USER_ID
GROUP BY usersTable.USER_ID;