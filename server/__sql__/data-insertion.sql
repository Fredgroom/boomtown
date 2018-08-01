INSERT INTO tags (title)
VALUES ('Household Items'), ('Tools'), ('Electronics'), ('Physical Media'), ('Sporting Goods'), ('Musical Instruments'), ('Recreational Equipment');

INSERT INTO items (title, imageurl, description, ownerid, borrowerid)
Values (
    'Baseball', 
    'https://media.istockphoto.com/photos/baseball-in-the-infield-picture-id482805043', 
    'Lightly-used baseball for you and your friend to enjoy at your next ball tournament.',
    '1',
    '2'

), 
(
    'Purple Racing Bike',
    'https://nnimgt-a.akamaihd.net/transform/v1/crop/frm/3AijacentBN9GedHCvcASxG/221465c4-75e3-4594-ab7c-08518e8df400.jpg/r0_0_3264_2448_w1200_h678_fmax.jpg',
    'Get exercise while having fun in the sun on this super-cool bike.',
    '1',
    '2'

), 
(
    'Flute',
    'https://cdn.pixabay.com/photo/2015/08/18/12/43/flute-893911_1280.jpg', 
    'Like-new flute to lend. Cmon, you know you want to play it...',
    '1',
    '2'
),
(
    'Puppy',
    'https://i.ytimg.com/vi/AZ2ZPmEfjvU/maxresdefault.jpg',
    'Furry chew machine',
    '1',
    '2'
);

Insert into itemtags (itemid, tagid)
VALUES (1, 1), 
(2, 1), (2, 5),
(3, 3), (3, 4),
(4, 1), (4, 5), (4, 7)
;

INSERT INTO users (email, fullname, bio)
VALUES
    ('william@example.com', 'Big Willie Windsor', 'Second in line to the throne'),
    ('Harry@example.com', 'Big Harry Windsor', 'Fifth in line to the throne')
;