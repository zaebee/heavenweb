
# core/models.py

from django.db import models
from django.utils.translation import ugettext_lazy as _
from easy_thumbnails.fields import ThumbnailerField


class Recipe(models.Model):
    DIFFICULTY_LEVELS = (
        ('Easy', 'Easy'),
        ('Medium', 'Medium'),
        ('Hard', 'Hard'),
    )
    name = models.CharField(max_length=120)
    ingredients = models.CharField(max_length=400)
    picture = models.FileField()
    difficulty = models.CharField(choices=DIFFICULTY_LEVELS, max_length=10)
    prep_time = models.PositiveIntegerField()
    prep_guide = models.TextField()

    def __str__(self):
        return "Recipe for {}".format(self.name)


class Post(models.Model):
    title = models.CharField(max_length=120)
    content = models.CharField(max_length=400)
    picture = ThumbnailerField(_('Main image'), max_length=200, upload_to='pictures/')

    date_added = models.DateTimeField(_(u'Date Added'), auto_now_add=True)
    date_updated = models.DateTimeField(_(u'Date Updated'), auto_now=True)

    def __str__(self):
        return "Post {}".format(self.title)
