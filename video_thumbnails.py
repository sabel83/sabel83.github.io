#!/usr/bin/python3
"""Utility to download the video thumbnails of the recommended videos"""

import os
import urllib.request
import collections
import yaml


VideoLink = collections.namedtuple('VideoLink', ['local_path', 'url'])


def relative(path):
    """Path relative to the script"""
    return os.path.join(os.path.dirname(os.path.realpath(__file__)), path)


def load_yaml(filename):
    """Parse the YAML file"""
    full_path = relative(os.path.join('_data', filename))
    with open(full_path, 'r') as in_f:
        return yaml.load(in_f, Loader=yaml.SafeLoader)


def video_links(doc):
    """Return all video links from the doc"""
    result = []
    if not isinstance(doc, str):
        try:
            for key, value in doc.items():
                if key == 'youtube':
                    result.append(VideoLink(
                        os.path.join('youtube', f'youtube_{value}.jpg'),
                        f'http://img.youtube.com/vi/{value}/0.jpg'
                    ))
                else:
                    result.extend(video_links(value))
        except AttributeError:
            try:
                for val in doc:
                    result.extend(video_links(val))
            except TypeError:
                pass
    return result


def videos():
    """Return the list of referenced videos"""
    result = []
    for filename in ('talks.yml', 'recommended.yml'):
        result.extend(video_links(load_yaml(filename)))
    return result


def main():
    """The main function of the script"""
    for video in videos():
        local_path = relative(os.path.join('images', video.local_path))
        if not os.path.isfile(local_path):
            print('Downloading {0}'.format(video.url))
            urllib.request.urlretrieve(video.url, local_path)


if __name__ == '__main__':
    main()
