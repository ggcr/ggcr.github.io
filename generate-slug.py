import argparse

if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument('-t', '--title', type=str, required=True)
    args = parser.parse_args()

    title = vars(args)['title']
    words = title.lower().split(' ')
    slug = '-'.join(words) + '.html'

    print(slug)
