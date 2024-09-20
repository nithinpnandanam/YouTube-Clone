import userIcon from "../assets/user.svg";
const CommentContainer = () => {
  const commentData = [
    {
      name: "Phoebe Buffay",
      comment: "Random Comment about a random thing by people from France",
    },
    {
      name: "Chandler Bing",
      comment: "Random Comment about a random thing by people from France",
      replies: [
        {
          name: "Chandler Bing",
          comment: "Random Comment about a random thing by people from France",
        },
        {
          name: "Chandler Bing",
          comment: "Random Comment about a random thing by people from France",
        },
      ],
    },
    {
      name: "Chandler Bing",
      comment: "Random Comment about a random thing by people from France",
    },
    {
      name: "Chandler Bing",
      comment: "Random Comment about a random thing by people from France",
      replies: [
        {
          name: "Ross Geller",
          comment: "Random Comment about a random thing by people from France",
          replies: [
            {
              name: "Ross Geller",
              comment: "Random Comment about a random thing by people from France",
            },
            {
              name: "Ross Geller",
              comment: "Random Comment about a random thing by people from France",
            },
          ],
        },
      ],
    },
    {
      name: "Chandler Bing",
      comment: "Random Comment about a random thing by people from France",
      replies: [
        {
          name: "Chandler Bing",
          comment: "Random Comment about a random thing by people from France",
        },
        {
          name: "Chandler Bing",
          comment: "Random Comment about a random thing by people from France",
          replies: [
            {
              name: "Chandler Bing",
              comment: "Random Comment about a random thing by people from France",
              replies: [
                {
                  name: "Chandler Bing",
                  comment: "Random Comment about a random thing by people from France",
                  replies: [
                    {
                      name: "Chandler Bing",
                      comment: "Random Comment about a random thing by people from France",
                    },
                  ]
                },
              ]
            },
          ]
        },
        {
          name: "Chandler Bing",
          comment: "Random Comment about a random thing by people from France",
        },
        {
          name: "Chandler Bing",
          comment: "Random Comment about a random thing by people from France",
        },
      ],
    },
  ];
  const CommentList = (props) => {
    const commentData = props.allComments;
    return (
      <div>
        {commentData.map((element, index) => {
          return (
            <div>
              <Comment info={element} key={index} />
              {element.replies && (
                <div className="ml-7  ">
                  <CommentList allComments={element.replies} />
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  };

  const Comment = (props) => {
    const { name, comment } = props.info;
    return (
      <div>
        <div className="flex pb-4">
          <img
            src={userIcon}
            alt="search icon"
            className="w-8 h-8 border-solid border-2 mr-4 border-gray-600 rounded-full"
          />
          <div>
            <p>{name}</p>
            <p>{comment}</p>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div>
      <p className="font-bold text-3xl p-4">Comments</p>
      <CommentList allComments={commentData} />
    </div>
  );
};
export default CommentContainer;
