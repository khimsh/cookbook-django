from django.db import models


class Recipe(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    prep_time = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)

    difficuly_choices = [
        ('beginner', 'beginner'),
        ('normal', 'normal'),
        ('master', 'master'),
    ]
    difficulty = models.CharField(max_length=100, choices=difficuly_choices)
