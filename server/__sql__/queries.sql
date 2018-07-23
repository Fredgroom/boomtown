
-- Insert a user
INSERT INTO users (email, fullname, bio)
VALUES (
    'example@example.com', 
    'Joe Bloggs', 
    'Lorem ipsum'
);

-- Insert a tag
INSERT INTO tags (title)
VALUES (
    'Example'
);

-- Insert an item with tags
WITH inserted AS (
    INSERT INTO items (title, imageurl, description)
    VALUES (
        'Example title',
        'Example image URL',
        'Example description'
    )
    RETURNING id
)
INSERT INTO itemtags (itemid, tagid)
SELECT id, 1
FROM inserted
;


-- Get a user with a given email
Select *
    From users
    where email = '--email-address--';

-- Get a user with a given ID
Select *
    From users
    where id = '3';

-- Get all the items
Select * from items;

-- Get all the items owned by a specific user (ID)
SELECT  items.title as Item, tags.title as Tag
FROM    items, itemtags, tags
WHERE   items.id = 5
AND     items.id = itemtags.itemid
AND     itemtags.tagid = tags.id
;

-- Get all the items for a specific user (ID) that are not borrowed
select * 
    From items
    where borrowerid is null;    

-- Get all the items borrowed by a given user (ID)
select * 
    From items
    where borrowerid = '--borrower id--';

-- Get all the tags
select * from tags;

-- Get all tags for a given item (ID)
SELECT  tags.title as Tag
FROM    items, itemtags, tags
WHERE   items.id = '--item-id--'
AND     itemtags.itemid = items.id
AND     tags.id = itemtags.tagid
;

 